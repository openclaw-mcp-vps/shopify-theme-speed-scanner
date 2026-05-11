import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Theme Speed Scanner – Find & Fix Performance Killers",
  description: "Analyze your Shopify theme for unused CSS, oversized images, and blocking scripts. Get actionable fix recommendations before launch."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2d6f8d54-7663-4f80-8126-ca31cc4a1ebc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
