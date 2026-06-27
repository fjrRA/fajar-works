// src/app/layout.tsx

import type {
  Metadata,
} from "next";
import {
  Archivo,
  IBM_Plex_Mono,
} from "next/font/google";

import {
  JsonLd,
} from "@/components/seo/json-ld";
import {
  createWebsiteStructuredData,
} from "@/lib/metadata/structured-data";

import "./globals.css";

import siteData from "../../content/site.json";

import {
  SiteFooter,
} from "@/components/layout/site-footer";
import {
  SiteHeader,
} from "@/components/layout/site-header";
import {
  SkipLink,
} from "@/components/layout/skip-link";
import {
  SITE_URL,
} from "@/lib/metadata/site-url";

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

const websiteStructuredData =
  createWebsiteStructuredData();

export const metadata: Metadata = {
  metadataBase: SITE_URL,

  title: {
    default: siteData.siteName,
    template: `%s — ${siteData.siteName}`,
  },

  description:
    "The personal website of Fajar Rahmana Akbar, featuring selected works, technical notes, learning logs, and personal observations.",

  applicationName:
    siteData.siteName,

  authors: [
    {
      name: siteData.name,
      url: "/about",
    },
  ],

  creator: siteData.name,
  publisher: siteData.name,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body
        className={`
    ${archivo.variable}
    ${ibmPlexMono.variable}
  `}
      >
        <JsonLd
          data={websiteStructuredData}
        />

        <SkipLink />
        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}