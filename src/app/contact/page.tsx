// src/app/contact/page.tsx
import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Fajar Rahmana Akbar regarding web development opportunities and professional discussions.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader
        index="05"
        label="Contact"
        titleSize="long"
        title={
          <>
            Start a
            <br />
            Conversation
          </>
        }
        description="Available for junior and entry-level opportunities, web development discussions, and professional connections."
      />
    </main>
  );
}