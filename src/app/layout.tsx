import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Favicon } from "@/components/favicon";

export const metadata: Metadata = {
  title: "MyWebsite",
  description: "Modern web apps with Next.js + shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Default favicon (will be updated by client) */}
        <link id="favicon" rel="icon" href="/favicon-light.png" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Favicon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
