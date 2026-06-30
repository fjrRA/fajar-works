import type {
  SiteContent,
} from "@/types/site";
import type {
  Social,
} from "@/types/social";

export type ContactHeroSite = Pick<
  SiteContent,
  | "role"
  | "location"
  | "locationCode"
  | "availabilityCode"
>;

export type ContactHeroEmail = Pick<
  Social,
  "href" | "value"
>;
