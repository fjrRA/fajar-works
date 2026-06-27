// src/lib/content/get-about-content.ts

import aboutData from "../../../content/about.json";

import type {
  AboutContent,
} from "@/types/about";

export function getAboutContent():
  AboutContent {
  return aboutData as AboutContent;
}