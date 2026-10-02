import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lenny Garnier",
  description:
    "Honest little apps, made on a rock in the Indian Ocean. Surf and RejectCheck.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/sea.jpeg", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
