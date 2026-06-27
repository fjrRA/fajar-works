// src/lib/metadata/site-url.ts

const DEVELOPMENT_SITE_URL =
  "http://localhost:3000";

function normalizeSiteUrl(
  value: string,
): URL {
  const valueWithProtocol =
    value.startsWith("http://") ||
      value.startsWith("https://")
      ? value
      : `https://${value}`;

  const siteUrl = new URL(
    valueWithProtocol,
  );

  /*
   * metadataBase hanya membutuhkan origin
   * website, bukan pathname, query, atau hash.
   */
  siteUrl.pathname = "/";
  siteUrl.search = "";
  siteUrl.hash = "";

  return siteUrl;
}

function resolveSiteUrl(): URL {
  const configuredSiteUrl =
    process.env.SITE_URL?.trim();

  if (configuredSiteUrl) {
    return normalizeSiteUrl(
      configuredSiteUrl,
    );
  }

  const vercelProductionUrl =
    process.env
      .VERCEL_PROJECT_PRODUCTION_URL
      ?.trim();

  if (vercelProductionUrl) {
    return normalizeSiteUrl(
      vercelProductionUrl,
    );
  }

  return new URL(
    DEVELOPMENT_SITE_URL,
  );
}

export const SITE_URL =
  resolveSiteUrl();

export const SITE_ORIGIN =
  SITE_URL.origin;

export function createAbsoluteUrl(
  pathname: string,
): string {
  return new URL(
    pathname,
    SITE_URL,
  ).toString();
}