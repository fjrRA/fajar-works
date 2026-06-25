// src/lib/content/get-capabilities.ts
import skillsData from "../../../content/skills.json";

import type { Capability } from "@/types/capability";

export function getCapabilities(): Capability[] {
  return skillsData as Capability[];
}

export function getCapabilitiesByIds(
  capabilityIds: readonly string[],
): Capability[] {
  const capabilities = getCapabilities();

  return capabilityIds.map((capabilityId) => {
    const capability = capabilities.find(
      (item) => item.id === capabilityId,
    );

    if (!capability) {
      throw new Error(
        `Capability with id "${capabilityId}" was not found.`,
      );
    }

    return capability;
  });
}