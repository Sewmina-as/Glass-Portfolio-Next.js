import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font", display: "swap" });

// Site-wide SEO metadata — shows in the browser tab and search engine results
export const metadata: Metadata = {
  title: "Achintha Sewmina — Software Engineer",
  description: "Portfolio of Achintha Sewmina, a software engineer crafting intuitive, beautiful experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
