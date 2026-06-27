// src/lib/content/get-contact-content.ts

import contactData from "../../../content/contact.json";

import type {
  ContactContent,
} from "@/types/contact";

export function getContactContent():
  ContactContent {
  return contactData as ContactContent;
}