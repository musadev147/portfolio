import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MusaDev – Full‑Stack Developer Portfolio",
  description:
    "Musa Alom Mim – Full‑stack developer crafting modern, performant web experiences. Explore projects, skills, and get in touch.",
  keywords: ["portfolio", "full-stack", "developer", "Next.js", "React", "MusaDev"],
  authors: [{ name: "Musa Alom Mim" }],
  openGraph: {
    title: "MusaDev – Portfolio",
    description: "Modern, premium developer portfolio by Musa Alom Mim",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
