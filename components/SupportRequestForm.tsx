"use client";

import { useState, type FormEvent } from "react";

const REQUEST_TYPES = [
  "Benefits",
  "Education",
  "Employment",
  "Entrepreneurship",
  "Housing",
  "Recovery Support",
] as const;

const CONTACT_METHODS = ["Phone", "Email", "Text"] as const;

interface FormData {
  requestType: string;
  contactMethod: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  deadlines: string;
  description: string;
}

const initial: FormData = {
  requestType: "",
  contactMethod: "",
  name: "",
  email: "",
  phone: "",
  location: "",
  deadlines: "",
  description: "",
};

export default function SupportRequestForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function set<K extends keyof FormData>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormData, string>> = {};

    if (!form.requestType) next.requestType = "Please select a request type.";
    if (!form.contactMethod) next.contactMethod = "Please select a contact method.";
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.location.trim()) next.location = "City / State is required.";
    if (!form.description.trim()) next.description = "Please describe how we can help.";
    if (form.description.length > 500) next.description = "Description must be 500 characters or fewer.";

    // At least email or phone required
    const hasEmail = form.email.trim().length > 0;
    const hasPhone = form.phone.trim().length > 0;

    if (!hasEmail && !hasPhone) {
      next.email = "Provide at least an email or phone number.";
      next.phone = "Provide at least an email or phone number.";
    }

    if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/support-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-xl border border-uvea-gold/30 bg-uvea-black p-8 text-center">
        <svg
          className="mx-auto mb-4 h-12 w-12 text-uvea-gold"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-display font-bold text-uvea-gold">
          Request Received
        </h3>
        <p className="mt-3 text-uvea-gray">
          Thank you, {form.name}. A UVEA coordinator will respond within 1–2
          business days.
        </p>
      </div>
    );
  }

  /* ── Form ── */
  const inputBase =
    "w-full rounded-lg border bg-uvea-black px-4 py-2.5 text-uvea-white placeholder:text-uvea-gray/50 transition focus:outline-none focus:ring-2 focus:ring-uvea-gold";
  const borderNormal = "border-uvea-gray/20";
  const borderError = "border-red-500/70";

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-2xl space-y-6">
      <p className="text-center text-sm text-uvea-gray">
        A UVEA coordinator will respond within 1–2 business days.
      </p>

      {/* Request type */}
      <Field label="Request Type" error={errors.requestType} required>
        <select
          value={form.requestType}
          onChange={(e) => set("requestType", e.target.value)}
          className={`${inputBase} ${errors.requestType ? borderError : borderNormal}`}
        >
          <option value="">— Select —</option>
          {REQUEST_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </Field>

      {/* Contact method */}
      <Field label="Preferred Contact Method" error={errors.contactMethod} required>
        <select
          value={form.contactMethod}
          onChange={(e) => set("contactMethod", e.target.value)}
          className={`${inputBase} ${errors.contactMethod ? borderError : borderNormal}`}
        >
          <option value="">— Select —</option>
          {CONTACT_METHODS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </Field>

      {/* Name */}
      <Field label="Name" error={errors.name} required>
        <input
          type="text"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="Your full name"
          className={`${inputBase} ${errors.name ? borderError : borderNormal}`}
        />
      </Field>

      {/* Email */}
      <Field label="Email" error={errors.email} required={!form.phone.trim()}>
        <input
          type="email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@example.com"
          className={`${inputBase} ${errors.email ? borderError : borderNormal}`}
        />
      </Field>

      {/* Phone */}
      <Field label="Phone" error={errors.phone} optional={!!form.email.trim()}>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          placeholder="(555) 555-1234"
          className={`${inputBase} ${errors.phone ? borderError : borderNormal}`}
        />
      </Field>

      {/* Location */}
      <Field label="Location (City / State)" error={errors.location} required>
        <input
          type="text"
          value={form.location}
          onChange={(e) => set("location", e.target.value)}
          placeholder="Dallas, TX"
          className={`${inputBase} ${errors.location ? borderError : borderNormal}`}
        />
      </Field>

      {/* Deadlines */}
      <Field label="Deadlines" optional>
        <input
          type="text"
          value={form.deadlines}
          onChange={(e) => set("deadlines", e.target.value)}
          placeholder="e.g. VA filing deadline March 15"
          className={`${inputBase} ${borderNormal}`}
        />
      </Field>

      {/* Description */}
      <Field label="How can we help?" error={errors.description} required>
        <textarea
          value={form.description}
          onChange={(e) => set("description", e.target.value)}
          maxLength={500}
          rows={4}
          placeholder="Briefly describe your situation or what you need support with…"
          className={`${inputBase} resize-y ${errors.description ? borderError : borderNormal}`}
        />
        <p className="mt-1 text-right text-xs text-uvea-gray/60">
          {form.description.length}/500
        </p>
      </Field>

      {submitError && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {submitError}
        </p>
      )}

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-block rounded-lg bg-uvea-gold px-8 py-3 text-lg font-semibold text-uvea-black transition hover:bg-uvea-gold/90 disabled:opacity-50"
        >
          {submitting ? "Submitting…" : "Request Support"}
        </button>
      </div>
    </form>
  );
}

/* ── Tiny field wrapper ── */
function Field({
  label,
  error,
  required,
  optional,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-uvea-white">
        {label}
        {required && <span className="ml-0.5 text-uvea-gold">*</span>}
        {optional && (
          <span className="ml-1 text-xs font-normal text-uvea-gray/60">(optional)</span>
        )}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
