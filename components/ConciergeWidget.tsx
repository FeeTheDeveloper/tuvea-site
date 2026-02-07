"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

/** Placeholder — replace with the real GPT URL when available. */
const CONCIERGE_GPT_URL = "https://chat.openai.com/g/uvea-veteran-concierge";

export default function ConciergeWidget() {
  const [open, setOpen] = useState(false);
  const [showCrisis, setShowCrisis] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /* Close on Escape */
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showCrisis) {
          setShowCrisis(false);
        } else {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }
    },
    [showCrisis],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [open, onKeyDown]);

  /* Close when clicking outside */
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
        setShowCrisis(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", onClick);
      return () => document.removeEventListener("mousedown", onClick);
    }
  }, [open]);

  return (
    <div
      ref={panelRef}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
    >
      {/* ── Panel ── */}
      {open && (
        <div
          role="dialog"
          aria-label="UVEA Veteran Concierge"
          className="mb-1 w-80 rounded-xl border border-uvea-white/10 bg-uvea-charcoal shadow-2xl sm:w-96"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-uvea-white/10 px-5 py-4">
            <div>
              <p className="text-sm font-display font-semibold text-uvea-gold">
                UVEA Veteran Concierge
              </p>
              <p className="mt-0.5 text-xs text-uvea-gray">
                Confidential &bull; No sign-up required
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setShowCrisis(false);
              }}
              aria-label="Close concierge panel"
              className="rounded-md p-1 text-uvea-gray transition hover:text-uvea-white"
            >
              <XIcon />
            </button>
          </div>

          {/* Body */}
          <div className="space-y-3 px-5 py-5">
            {showCrisis ? (
              /* ── Crisis sub-view ── */
              <>
                <button
                  type="button"
                  onClick={() => setShowCrisis(false)}
                  className="mb-1 flex items-center gap-1 text-xs text-uvea-gold transition hover:text-uvea-gold/80"
                >
                  <ChevronLeftIcon />
                  Back
                </button>

                <p className="text-sm font-display font-semibold text-uvea-white">
                  Veterans Crisis Line — 24/7
                </p>

                <div className="space-y-2">
                  <a
                    href="tel:988"
                    className="flex items-center gap-3 rounded-lg border border-uvea-white/10 bg-uvea-black px-4 py-3 text-left transition hover:border-uvea-gold/40"
                  >
                    <CrisisIcon />
                    <div>
                      <p className="text-sm font-medium text-uvea-white">
                        Call 988, press 1
                      </p>
                      <p className="mt-0.5 text-xs text-uvea-gray">
                        Suicide &amp; Crisis Lifeline for Veterans
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 rounded-lg border border-uvea-white/10 bg-uvea-black px-4 py-3 text-left">
                    <TextIcon />
                    <div>
                      <p className="text-sm font-medium text-uvea-white">
                        Text 838255
                      </p>
                      <p className="mt-0.5 text-xs text-uvea-gray">
                        Send a text message for support
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.veteranscrisisline.net/get-help-now/chat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-uvea-white/10 bg-uvea-black px-4 py-3 text-left transition hover:border-uvea-gold/40"
                  >
                    <ChatIcon />
                    <div>
                      <p className="text-sm font-medium text-uvea-white">
                        Crisis Chat
                      </p>
                      <p className="mt-0.5 text-xs text-uvea-gray">
                        veteranscrisisline.net
                      </p>
                    </div>
                  </a>
                </div>
              </>
            ) : (
              /* ── Main menu ── */
              <>
                <p className="text-sm font-display font-semibold text-uvea-white">
                  How can we help today?
                </p>

                {/* 1. Get Help Now */}
                <Link
                  href="/get-help"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center gap-3 rounded-lg border border-uvea-white/10 bg-uvea-black px-4 py-3.5 text-left transition-all duration-200 hover:border-uvea-gold/40 hover:shadow-md"
                >
                  <ActionBadge>
                    <HeartIcon />
                  </ActionBadge>
                  <div>
                    <p className="text-sm font-medium text-uvea-white">
                      Get Help Now
                    </p>
                    <p className="mt-0.5 text-xs text-uvea-gray">
                      Submit a support request
                    </p>
                  </div>
                </Link>

                {/* 2. Housing & Stability */}
                <Link
                  href="/resources/housing"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center gap-3 rounded-lg border border-uvea-white/10 bg-uvea-black px-4 py-3.5 text-left transition-all duration-200 hover:border-uvea-gold/40 hover:shadow-md"
                >
                  <ActionBadge>
                    <HomeIcon />
                  </ActionBadge>
                  <div>
                    <p className="text-sm font-medium text-uvea-white">
                      Housing &amp; Stability
                    </p>
                    <p className="mt-0.5 text-xs text-uvea-gray">
                      Shelter, transitional &amp; permanent housing
                    </p>
                  </div>
                </Link>

                {/* 3. Crisis Resources */}
                <button
                  type="button"
                  onClick={() => setShowCrisis(true)}
                  className="flex w-full items-center gap-3 rounded-lg border border-uvea-white/10 bg-uvea-black px-4 py-3.5 text-left transition-all duration-200 hover:border-uvea-gold/40 hover:shadow-md"
                >
                  <ActionBadge>
                    <CrisisIcon />
                  </ActionBadge>
                  <div>
                    <p className="text-sm font-medium text-uvea-white">
                      Crisis Resources
                    </p>
                    <p className="mt-0.5 text-xs text-uvea-gray">
                      988 hotline, text &amp; chat — 24/7
                    </p>
                  </div>
                </button>

                {/* External GPT link */}
                <a
                  href={CONCIERGE_GPT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-3 rounded-lg border border-uvea-white/10 bg-uvea-black px-4 py-3.5 text-left transition-all duration-200 hover:border-uvea-gold/40 hover:shadow-md"
                >
                  <ActionBadge>
                    <ExternalIcon />
                  </ActionBadge>
                  <div>
                    <p className="text-sm font-medium text-uvea-white">
                      Open UVEA Veteran Concierge GPT
                    </p>
                    <p className="mt-0.5 text-xs text-uvea-gray">
                      AI-powered resource navigator (opens new tab)
                    </p>
                  </div>
                </a>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-uvea-white/10 px-5 py-3">
            <p className="text-center text-xs text-uvea-gray">
              Your conversations stay private. Not a substitute for emergency
              services.
            </p>
          </div>
        </div>
      )}

      {/* ── Trigger button ── */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setOpen(!open);
          if (open) setShowCrisis(false);
        }}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="flex items-center gap-2 rounded-full border border-uvea-gold/30 bg-uvea-charcoal px-5 py-3 text-sm font-semibold text-uvea-gold shadow-lg transition-all duration-200 hover:scale-[1.03] hover:border-uvea-gold hover:shadow-uvea-gold/20"
      >
        <SparkleIcon />
        <span className="hidden sm:inline">UVEA Veteran Concierge</span>
        <span className="sm:hidden">Concierge</span>
      </button>
    </div>
  );
}

/* ───── Tiny helper components & icons ───── */

function ActionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-uvea-gold/10 text-uvea-gold"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function XIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function CrisisIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}
