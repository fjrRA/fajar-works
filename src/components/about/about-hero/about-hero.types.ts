import type {
  SiteContent,
} from "@/types/site";

export type AboutHeroSite = Pick<
  SiteContent,
  | "name"
  | "role"
  | "location"
  | "availability"
  | "availabilityCode"
>;
