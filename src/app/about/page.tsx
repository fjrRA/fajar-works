// src/app/about/page.tsx
import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "Profile, background, capabilities, and professional direction of Fajar Rahmana Akbar.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeader
        index="04"
        label="Profile"
        title="About Fajar"
        description="A web developer based in Bekasi, focused on building practical, responsive, and maintainable web applications while continuing to strengthen his technical foundations."
      />
    </main>
  );
}