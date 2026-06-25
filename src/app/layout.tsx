// src/app/layout.tsx
import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fajar Works",
    template: "%s — Fajar Works",
  },
  description:
    "The personal website of Fajar Rahmana Akbar, featuring selected works, technical notes, learning logs, and personal observations.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}