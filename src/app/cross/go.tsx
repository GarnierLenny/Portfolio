"use client";

import { useEffect } from "react";

/** Sends the visitor on to the tool, after a short pause so Vercel Analytics records the page view first. */
export default function GoToTool({ url }: { url: string }) {
  useEffect(() => {
    const t = setTimeout(() => window.location.replace(url), 700);
    return () => clearTimeout(t);
  }, [url]);
  return null;
}
