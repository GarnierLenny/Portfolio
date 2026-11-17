import type { Metadata } from "next";

// The "I'd pay for more" link in the Cross two worlds tool opens this page. Nothing is sold: each visit is a vote,
// counted as a page view by the <Analytics /> in the root layout. Enough votes, and paid crosses get built.
export const metadata: Metadata = { title: "Noted, thanks", robots: { index: false } };

export default function MorePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-md flex flex-col gap-4 text-center">
        <h1 className="text-2xl font-bold">Noted, thanks</h1>
        <p className="text-slate-400">
          Paid crosses don&apos;t exist yet. Your click counts as a vote: if enough people want more, I&apos;ll build it.
          Meanwhile, your free crosses come back tomorrow.
        </p>
        <a href="/cross" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">
          Back to the tool
        </a>
      </div>
    </div>
  );
}
