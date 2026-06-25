// src/lib/content/get-home-content.ts
import homeData from "../../../content/home.json";

import type { HomeContent } from "@/types/home";

export function getHomeContent(): HomeContent {
  return homeData as HomeContent;
}