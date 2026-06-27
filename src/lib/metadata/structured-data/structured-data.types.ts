// src/lib/metadata/structured-data/
// structured-data.types.ts

export type StructuredData =
  Record<string, unknown>;

export type StructuredDataSocial = {
  id: string;
  href: string;
  external: boolean;
};