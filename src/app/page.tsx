// src/app/page.tsx
import type { Metadata } from "next";

import siteData from "../../content/site.json";

import { HomeDirectory } from "@/components/home/home-directory";
import { HomeHero } from "@/components/home/home-hero";

export const metadata: Metadata = {
  title: {
    absolute:
      "Fajar Rahmana Akbar — Web Developer | Fajar Works",
  },
  description: siteData.description,
};

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <HomeDirectory />
    </main>
  );
}

// import { Container } from "@/components/layout/container";
// import { Button } from "@/components/ui/button";
// import { SectionHeading } from "@/components/ui/section-heading";
// import { SectionLabel } from "@/components/ui/section-label";

// export default function HomePage() {
//   return (
//     <main className="bg-paper text-ink">
//       <Container className="site-container py-12 md:py-16">
//         <header className="border-b border-line pb-10">
//           <SectionLabel tone="muted">
//             FRA—26 / Token Specimen
//           </SectionLabel>

//           <h1 className="type-display mt-6 max-w-5xl">
//             Design
//             <br />
//             Foundation
//           </h1>

//           <p className="type-body reading-column mt-6 text-muted">
//             Industrial and editorial design tokens for Fajar Works. This page is
//             temporary and will be replaced after the visual foundation is complete.
//           </p>
//         </header>

//         <section className="section-block">
//           <div className="mb-6 flex items-end justify-between gap-6">
//             <div>
//               <SectionLabel index="01">
//                 Palette
//               </SectionLabel>

//               <SectionHeading className="mt-2">
//                 Material Reference
//               </SectionHeading>
//             </div>

//             <SectionLabel
//               tone="muted"
//               className="hidden sm:block"
//             >
//               Industrial Paper Series
//             </SectionLabel>
//           </div>

//           <div className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
//             <article className="border-r border-b border-line">
//               <div className="h-32 bg-paper" />

//               <div className="border-t border-line p-4">
//                 <p className="text-sm font-bold uppercase">Paper</p>
//                 <p className="type-meta mt-1 text-muted uppercase">
//                   #EDEAE2
//                 </p>
//               </div>
//             </article>

//             <article className="border-r border-b border-line">
//               <div className="h-32 bg-panel" />

//               <div className="border-t border-line p-4">
//                 <p className="text-sm font-bold uppercase">Panel</p>
//                 <p className="type-meta mt-1 text-muted uppercase">
//                   #DFDDD5
//                 </p>
//               </div>
//             </article>

//             <article className="border-r border-b border-line">
//               <div className="h-32 bg-panel-strong" />

//               <div className="border-t border-line p-4">
//                 <p className="text-sm font-bold uppercase">Panel Strong</p>
//                 <p className="type-meta mt-1 text-muted uppercase">
//                   #D1CFC7
//                 </p>
//               </div>
//             </article>

//             <article className="border-r border-b border-line">
//               <div className="h-32 bg-ink" />

//               <div className="border-t border-line p-4">
//                 <p className="text-sm font-bold uppercase">Ink</p>
//                 <p className="type-meta mt-1 text-muted uppercase">
//                   #171918
//                 </p>
//               </div>
//             </article>

//             <article className="border-r border-b border-line">
//               <div className="h-32 bg-muted" />

//               <div className="border-t border-line p-4">
//                 <p className="text-sm font-bold uppercase">Muted</p>
//                 <p className="type-meta mt-1 text-muted uppercase">
//                   #676B68
//                 </p>
//               </div>
//             </article>

//             <article className="border-r border-b border-line">
//               <div className="h-32 bg-accent" />

//               <div className="border-t border-line p-4">
//                 <p className="text-sm font-bold uppercase">Safety Orange</p>
//                 <p className="type-meta mt-1 text-muted uppercase">#C7552D
//                 </p>
//               </div>
//             </article>
//           </div>
//         </section>

//         <section className="section-divider section-block">
//           <SectionLabel index="02">
//             Typography
//           </SectionLabel>

//           <div className="mt-6 grid border-t border-l border-line lg:grid-cols-2">
//             <article className="border-r border-b border-line p-6 md:p-8">
//               <SectionLabel tone="muted">
//                 Primary Typeface / Archivo
//               </SectionLabel>

//               <p className="mt-8 text-4xl leading-[0.95] font-bold tracking-[-0.04em] uppercase sm:text-6xl">
//                 Works,
//                 <br />
//                 Notes &amp;
//                 <br />
//                 Progress.
//               </p>

//               <p className="type-body mt-8 max-w-lg text-muted">
//                 Archivo is used for headings, descriptions, project titles, articles, and
//                 general reading content.
//               </p>
//             </article>

//             <article className="border-r border-b border-line p-6 md:p-8">
//               <SectionLabel tone="muted">
//                 Utility Typeface / IBM Plex Mono
//               </SectionLabel>

//               <dl className="mt-8 space-y-5 font-mono text-sm">
//                 <div className="flex justify-between gap-6 border-b border-line pb-3">
//                   <dt className="text-muted uppercase">Reference</dt>
//                   <dd>FRA—26</dd>
//                 </div>

//                 <div className="flex justify-between gap-6 border-b border-line pb-3">
//                   <dt className="text-muted uppercase">Category</dt>
//                   <dd>Development</dd>
//                 </div>

//                 <div className="flex justify-between gap-6 border-b border-line pb-3">
//                   <dt className="text-muted uppercase">Status</dt>
//                   <dd className="text-accent">In Progress</dd>
//                 </div>

//                 <div className="flex justify-between gap-6 border-b border-line pb-3">
//                   <dt className="text-muted uppercase">Updated</dt>
//                   <dd>2026.06.25</dd>
//                 </div>
//               </dl>
//             </article>
//           </div>
//         </section>

//         <section className="section-divider section-block">
//           <SectionLabel index="03">
//             Interface Test
//           </SectionLabel>

//           <div className="mt-6 flex flex-wrap gap-4">
//             <div className="mt-6 flex flex-wrap gap-4">
//               <Button>
//                 Primary Action
//               </Button>

//               <Button variant="secondary">
//                 Secondary Action
//               </Button>
//             </div>
//           </div>
//         </section>
//       </Container>
//     </main>
//   );
// }