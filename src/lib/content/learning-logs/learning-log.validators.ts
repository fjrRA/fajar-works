import {
  createContentFieldValidators,
} from "@/lib/content/validation/content-field.validators";

const validators =
  createContentFieldValidators(
    "Learning log",
  );

export const {
  requireString,
  requireBoolean,
  requireStringArray,
  requireAllowedValue,
  requireDateString,
  optionalDateString,
  optionalGitHubRepositoryUrl,
} = validators;
