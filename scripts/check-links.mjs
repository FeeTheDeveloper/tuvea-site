#!/usr/bin/env node
/**
 * scripts/check-links.mjs
 *
 * Collects external URLs from:
 *   - src/data/resources/housing.ts  (resource.website fields)
 *   - app/get-help/page.tsx          (externalLinks[].href)
 *
 * De-duplicates, then checks each with HEAD (fallback GET), one retry.
 * Prints a report and exits with code 1 if any failures.
 */

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const TIMEOUT_MS = 10_000;

/* ── 1. Collect URLs ────────────────────────────────── */

function extractUrls(filePath, pattern) {
  const content = readFileSync(resolve(root, filePath), "utf-8");
  const urls = [];
  let match;
  while ((match = pattern.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

// housing.ts — website: "..."
const housingUrls = extractUrls(
  "src/data/resources/housing.ts",
  /website:\s*["'](https?:\/\/[^"']+)["']/g,
);

// get-help/page.tsx — href: "..."
const getHelpUrls = extractUrls(
  "app/get-help/page.tsx",
  /href:\s*["'](https?:\/\/[^"']+)["']/g,
);

const allUrls = [...new Set([...housingUrls, ...getHelpUrls])].sort();

console.log(`\nFound ${allUrls.length} unique URLs to check.\n`);

/* ── 2. Check each URL ──────────────────────────────── */

async function fetchWithTimeout(url, opts = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { ...opts, signal: controller.signal, redirect: "follow" });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

async function checkUrl(url) {
  // Try HEAD, fall back to GET
  for (const method of ["HEAD", "GET"]) {
    try {
      const res = await fetchWithTimeout(url, { method });
      if (res.ok) return { url, ok: true };
      // Only fall back from HEAD to GET on non-ok status
      if (method === "HEAD") continue;
      return { url, ok: false, detail: `HTTP ${res.status}` };
    } catch (err) {
      if (method === "HEAD") continue;
      return { url, ok: false, detail: err?.cause?.code || err.name || String(err) };
    }
  }
  // Should not reach here, but just in case
  return { url, ok: false, detail: "Unknown error" };
}

async function checkWithRetry(url) {
  const first = await checkUrl(url);
  if (first.ok) return first;
  // Retry once
  return checkUrl(url);
}

/* ── 3. Run & report ────────────────────────────────── */

const CONCURRENCY = 8;

async function runAll() {
  const results = [];
  const queue = [...allUrls];

  async function worker() {
    while (queue.length > 0) {
      const url = queue.shift();
      if (!url) break;
      const result = await checkWithRetry(url);
      results.push(result);
      const tag = result.ok ? "\x1b[32m  OK\x1b[0m" : "\x1b[31mFAIL\x1b[0m";
      const extra = result.detail ? ` — ${result.detail}` : "";
      console.log(`${tag}  ${result.url}${extra}`);
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  return results;
}

const results = await runAll();

const failures = results.filter((r) => !r.ok);
const passes = results.filter((r) => r.ok);

console.log(`\n────────────────────────────────────`);
console.log(`  Passed: ${passes.length}   Failed: ${failures.length}   Total: ${results.length}`);
console.log(`────────────────────────────────────\n`);

if (failures.length > 0) {
  process.exit(1);
}
