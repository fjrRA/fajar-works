// src/types/contact.ts

export type ContactHeaderContent = {
  index: string;
  label: string;
  title: string;
  description: string;
};

export type ContactAvailabilityContent = {
  label: string;
  title: string;
  description: string;
};

export type ContactChannelsContent = {
  label: string;
  title: string;
  description: string;
};

export type ContactOpportunitiesContent = {
  label: string;
  title: string;
  description: string;
  items: string[];
};

export type ContactClosingContent = {
  label: string;
  title: string;
  paragraphs: string[];
  ctaLabel: string;
};

export type ContactContent = {
  header: ContactHeaderContent;
  availability: ContactAvailabilityContent;
  channels: ContactChannelsContent;
  opportunities: ContactOpportunitiesContent;
  closing: ContactClosingContent;
};