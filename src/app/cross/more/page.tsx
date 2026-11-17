import type { Metadata } from "next";

// The "I'd pay for more" link in the Crosswise tool opens this page. Nothing is sold: each visit is a vote,
// counted as a page view by the <Analytics /> in the root layout. Enough votes, and paid crosses get built.
export const metadata: Metadata = { title: "Noted, thanks · Crosswise", robots: { index: false } };

export default function MorePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-md flex flex-col gap-4 text-center">
        {/* The Crosswise logo: two tiles, two worlds, the overlap is where ideas come from. */}
        <svg width="48" height="48" viewBox="10 10 60 60" aria-hidden="true" className="mx-auto">
          <defs><clipPath id="cw-a"><rect x="12" y="16" width="34" height="34" rx="9" /></clipPath></defs>
          <rect x="12" y="16" width="34" height="34" rx="9" fill="#0a66e0" />
          <rect x="34" y="30" width="34" height="34" rx="9" fill="#af52de" />
          <rect x="34" y="30" width="34" height="34" rx="9" fill="#4b2ca8" clipPath="url(#cw-a)" />
        </svg>
        <h1 className="text-2xl font-bold">Noted, thanks</h1>
        <p className="text-slate-400">
          Paid crosses don&apos;t exist yet. Your click counts as a vote: if enough people want more, I&apos;ll build it.
          Meanwhile, your free crosses come back tomorrow.
        </p>
        <a href="/cross" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">
          Back to Crosswise
        </a>
      </div>
    </div>
  );
}
