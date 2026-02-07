"use client";

import { useState, useRef, useEffect } from "react";

export default function FloatingConcierge() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Close on Escape */
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [open]);

  /* Close when clicking outside the panel */
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", onClick);
      return () => document.removeEventListener("mousedown", onClick);
    }
  }, [open]);

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Chat panel */}
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
              onClick={() => setOpen(false)}
              aria-label="Close concierge panel"
              className="rounded-md p-1 text-uvea-gray transition hover:text-uvea-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="space-y-3 px-5 py-5">
            <p className="text-sm leading-relaxed text-uvea-gray">
              How can we support you today? Choose an option below to get
              started.
            </p>

            {/* Option 1 — Internal chatbot placeholder */}
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg border border-uvea-white/10 bg-uvea-black px-4 py-3.5 text-left transition-all duration-200 hover:border-uvea-gold/40 hover:shadow-md"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-uvea-gold/10 text-uvea-gold"
                aria-hidden="true"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-uvea-white">
                  Chat with UVEA Concierge
                </p>
                <p className="mt-0.5 text-xs text-uvea-gray">
                  Guided help for benefits, housing &amp; more
                </p>
              </div>
            </button>

            {/* Option 2 — External GPT link */}
            <a
              href="https://chat.openai.com/g/uvea-veteran-concierge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center gap-3 rounded-lg border border-uvea-white/10 bg-uvea-black px-4 py-3.5 text-left transition-all duration-200 hover:border-uvea-gold/40 hover:shadow-md"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-uvea-gold/10 text-uvea-gold"
                aria-hidden="true"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-uvea-white">
                  Open UVEA Veteran Concierge GPT
                </p>
                <p className="mt-0.5 text-xs text-uvea-gray">
                  AI-powered resource navigator (opens new tab)
                </p>
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="border-t border-uvea-white/10 px-5 py-3">
            <p className="text-center text-xs text-uvea-gray">
              Your conversations stay private. Not a substitute for emergency services.
            </p>
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="flex items-center gap-2 rounded-full border border-uvea-gold/30 bg-uvea-charcoal px-5 py-3 text-sm font-semibold text-uvea-gold shadow-lg transition-all duration-200 hover:scale-[1.03] hover:border-uvea-gold hover:shadow-uvea-gold/20"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
          />
        </svg>
        <span className="hidden sm:inline">UVEA Veteran Concierge</span>
        <span className="sm:hidden">Concierge</span>
      </button>
    </div>
  );
}
