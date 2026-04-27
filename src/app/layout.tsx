import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { ScrollProgressBar } from "@/components/effects/ScrollProgressBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nathan Pernot — Full-Stack Developer",
  description:
    "Portfolio of Nathan Pernot — IT student and full-stack developer specializing in polished, modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased">
        <CursorGlow />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
