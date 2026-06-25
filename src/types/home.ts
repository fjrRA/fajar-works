// src/types/home.ts
export type CurrentFocusItem = {
  index: string;
  label: string;
  value: string;
};

export type HomeSelectedWorkContent = {
  heading: string;
  description: string;
  allWorkHref: string;
  allWorkLabel: string;
};

export type HomeCapabilitiesContent = {
  heading: string;
  description: string;
  focusHeading: string;
  focusDescription: string;
};

export type HomeLatestNotesContent = {
  heading: string;
  description: string;
  allNotesHref: string;
  allNotesLabel: string;
};

export type HomeLearningProgressContent = {
  heading: string;
  description: string;
  allLogsHref: string;
  allLogsLabel: string;
};

export type HomeProfilePoint = {
  index: string;
  label: string;
  value: string;
};

export type HomeShortProfileContent = {
  heading: string;
  description: string;
  profileHref: string;
  profileLabel: string;
  points: HomeProfilePoint[];
};

export type HomeDirectoryContent = {
  heading: string;
  description: string;
};

export type HomeContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  href: string;
  linkLabel: string;
};

export type HomeContent = {
  heroEyebrow: string;
  selectedWork: HomeSelectedWorkContent;
  capabilities: HomeCapabilitiesContent;
  latestNotes: HomeLatestNotesContent;
  learningProgress: HomeLearningProgressContent;
  featuredProjectSlugs: string[];
  featuredCapabilityIds: string[];
  latestNotesLimit: number;
  latestLearningLogsLimit: number;
  currentFocus: CurrentFocusItem[];
  shortProfile: HomeShortProfileContent;
  directory: HomeDirectoryContent;
  contact: HomeContactContent;
};