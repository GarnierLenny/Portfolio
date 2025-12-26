import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import "yet-another-react-lightbox/styles.css";

const DMSerifText = Lexend();

export const metadata: Metadata = {
  title: "Lenny Garnier",
  description: "Lenny Garnier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html suppressHydrationWarning lang="en">
        <body className={`${DMSerifText.className} antialiased no-scrollbar`}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </>
  );
}
