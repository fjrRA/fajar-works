import {
  optionalContentDateString,
  requireContentDateString,
} from "./content-date.validators";
import type {
  ContentValidationContext,
} from "./content-validation.types";
import {
  optionalContentString,
  requireAllowedContentValue,
  requireContentBoolean,
  requireContentString,
  requireContentStringArray,
} from "./content-value.validators";
import {
  optionalGitHubRepositoryUrl,
} from "./github-repository-url.validator";

type ContentFieldValidatorOptions = {
  requireUniqueStringArrays?: boolean;
};

export function createContentFieldValidators(
  contentType: string,
  options: ContentFieldValidatorOptions = {},
) {
  const context: ContentValidationContext = {
    contentType,
    requireUniqueStringArrays:
      options.requireUniqueStringArrays ?? false,
  };

  return {
    requireString: (
      value: unknown,
      fieldName: string,
      fileName: string,
    ) =>
      requireContentString(
        context,
        value,
        fieldName,
        fileName,
      ),
    requireBoolean: (
      value: unknown,
      fieldName: string,
      fileName: string,
    ) =>
      requireContentBoolean(
        context,
        value,
        fieldName,
        fileName,
      ),
    requireStringArray: (
      value: unknown,
      fieldName: string,
      fileName: string,
    ) =>
      requireContentStringArray(
        context,
        value,
        fieldName,
        fileName,
      ),
    requireAllowedValue: <
      TValue extends string,
    >(
      value: unknown,
      allowedValues: readonly TValue[],
      fieldName: string,
      fileName: string,
    ) =>
      requireAllowedContentValue(
        context,
        value,
        allowedValues,
        fieldName,
        fileName,
      ),
    requireDateString: (
      value: unknown,
      fieldName: string,
      fileName: string,
    ) =>
      requireContentDateString(
        context,
        value,
        fieldName,
        fileName,
      ),
    optionalString: (
      value: unknown,
      fieldName: string,
      fileName: string,
    ) =>
      optionalContentString(
        context,
        value,
        fieldName,
        fileName,
      ),
    optionalDateString: (
      value: unknown,
      fieldName: string,
      fileName: string,
    ) =>
      optionalContentDateString(
        context,
        value,
        fieldName,
        fileName,
      ),
    optionalGitHubRepositoryUrl: (
      value: unknown,
      fieldName: string,
      fileName: string,
    ) =>
      optionalGitHubRepositoryUrl(
        context,
        value,
        fieldName,
        fileName,
      ),
  };
}
