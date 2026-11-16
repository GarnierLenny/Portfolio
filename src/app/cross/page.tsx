import type { Metadata } from "next";
import GoToTool from "./go";
import { TOOL_URL } from "./tool-url";

// lennygarnier.com/cross: the link said in the videos. The visit is counted by the <Analytics /> in the root layout
// (Vercel Web Analytics, page views), then the visitor goes on to the tool, a claude.ai artifact.
export const metadata: Metadata = {
  title: "Cross two worlds",
  description: "Pick two worlds and grow small tool ideas where they meet, on your own Claude.",
};

export default function CrossPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-md flex flex-col gap-4 text-center">
        <h1 className="text-2xl font-bold">Cross two worlds</h1>
        {TOOL_URL ? (
          <>
            <p className="text-slate-400">Opening the tool on claude.ai…</p>
            <a href={TOOL_URL} className="text-amber-400 hover:text-amber-300 underline underline-offset-4">
              Not opening? Click here
            </a>
            <GoToTool url={TOOL_URL} />
          </>
        ) : (
          <p className="text-slate-400">The tool goes live very soon. Come back in a day or two.</p>
        )}
      </div>
    </div>
  );
}
