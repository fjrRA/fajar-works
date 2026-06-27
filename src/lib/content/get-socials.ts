// src/lib/content/get-socials.ts

import socialsData from "../../../content/socials.json";

import type { Social } from "@/types/social";

export function getSocials(): Social[] {
  return socialsData as Social[];
}