// src/components/seo/json-ld.tsx

type JsonLdData =
  | Record<string, unknown>
  | readonly Record<string, unknown>[];

type JsonLdProps = {
  data: JsonLdData;
};

function serializeJsonLd(
  data: JsonLdData,
): string {
  return JSON.stringify(data).replace(
    /</g,
    "\\u003c",
  );
}

export function JsonLd({
  data,
}: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(data),
      }}
    />
  );
}