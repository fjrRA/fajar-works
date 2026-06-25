// src/lib/utils/format-content-date.ts
const contentDateFormatter =
  new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

export function formatContentDate(
  dateValue: string,
): string {
  return contentDateFormatter
    .format(new Date(`${dateValue}T00:00:00Z`))
    .toUpperCase();
}