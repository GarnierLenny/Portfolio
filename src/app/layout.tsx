import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Lenny Garnier | Full-Stack Developer | React, Next.js, TypeScript",
  description: "Experienced full-stack developer specializing in React, Next.js, TypeScript, React Native, and modern web technologies. View my portfolio of innovative web and mobile applications.",
  keywords: ["Full-Stack Developer", "React Developer", "Next.js", "TypeScript", "React Native", "Web Development", "Mobile Development", "Software Engineer"],
  authors: [{ name: "Lenny Garnier", url: "https://github.com/GarnierLenny" }],
  creator: "Lenny Garnier",
  openGraph: {
    title: "Lenny Garnier - Full-Stack Developer",
    description: "Portfolio showcasing innovative web and mobile development projects",
    url: "https://lennygarnier.com",
    siteName: "Lenny Garnier Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
