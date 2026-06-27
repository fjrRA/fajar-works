// src/types/about.ts

export type AboutHeaderContent = {
  index: string;
  label: string;
  title: string;
  description: string;
};

export type AboutProfileContent = {
  label: string;
  title: string;
  paragraphs: string[];
};

export type AboutDirectionContent = {
  label: string;
  title: string;
  description: string;
  focus: string[];
  approach: string[];
};

export type AboutContent = {
  header: AboutHeaderContent;
  profile: AboutProfileContent;
  direction: AboutDirectionContent;
  education: AboutEducationContent;
  capabilities: AboutCapabilitiesContent;
  cv: AboutCvContent;
};

export type AboutEducationHighlight = {
  index: string;
  type: string;
  title: string;
  period: string;
  description: string;
  href: string;
  linkLabel: string;
};

export type AboutEducationContent = {
  label: string;
  title: string;
  institution: string;
  field: string;
  level: string;
  duration: string;
  graduationYear: number;
  description: string[];
  highlights: AboutEducationHighlight[];
};

export type AboutCapabilitiesContent = {
  label: string;
  title: string;
  description: string;
};

export type AboutCvFile = {
  index: string;
  language: string;
  label: string;
  href: string;
  fileName: string;
};

export type AboutCvContent = {
  label: string;
  title: string;
  description: string;
  files: AboutCvFile[];
};