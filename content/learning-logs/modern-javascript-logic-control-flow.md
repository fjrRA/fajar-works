---
title: "Modern JavaScript: Logic & Control Flow"
slug: "modern-javascript-logic-control-flow"
excerpt: "A reviewed course record about conditions, truthy and falsy values, logical operators, nullish coalescing, and preserving valid zero values."
loggedAt: "2026-06-17"
updatedAt: "2026-06-30"
published: true
status: "Completed"
category: "Course Log"
source: "Udemy - Modern JavaScript From The Beginning 2.0"
module: "Section 5 - Logic & Control Flow"
progress: "Section 5 Completed / Applied Practice"
topics:
  - "If Statements"
  - "Switch Statements"
  - "Truthy and Falsy"
  - "Logical Operators"
  - "Short-Circuit Evaluation"
  - "Ternary Operator"
---

## Session objective

The objective was to understand how JavaScript chooses which branch to execute and how non-boolean values behave inside a condition.

I considered the section useful only if I could predict a branch before running it and distinguish “missing” data from a valid value that happens to be falsy.

## Concepts I can explain

### Conditions and comparison

`if`, `else if`, and `else` evaluate branches in order. A switch statement can make several explicit cases easier to scan, but it does not remove the need to understand the values being compared.

Strict equality is the safer default when I want both value and type to match. Nested conditions are possible, although early returns can sometimes make the same logic easier to follow.

### Truthy, falsy, and short-circuiting

An empty string, zero, `null`, `undefined`, and `NaN` are falsy. Empty arrays and objects are truthy. This matters because a condition can reject zero even when zero is meaningful data.

AND and OR can stop evaluating once the result is already known. Nullish coalescing is narrower: it falls back only for `null` or `undefined`, which allows values such as zero and an empty string to remain intact.

## Practice evidence

The most useful practice was a ticket-limit rule where zero means “do not issue any tickets” and must not be replaced by a default:

```js title="Preserving zero with nullish coalescing" showLineNumbers
function resolveTicketLimit(settings) {
  const requestedLimit =
    settings.limit ?? 10;

  if (requestedLimit < 0) {
    return 0;
  }

  return requestedLimit;
}

console.log(resolveTicketLimit({ limit: 0 }));
```

The expected output is `0`. Replacing `??` with `||` would incorrectly produce the default value because zero is falsy.

## Mistake and challenge

My main mistake was treating all falsy values as unavailable values. That shortcut is convenient until the domain gives zero, an empty string, or `false` a legitimate meaning.

The harder challenge is not remembering the falsy list. It is choosing a condition that matches the business rule instead of choosing the shortest expression.

## Correction

Before adding a fallback, I now ask what “missing” means for that field:

- use `??` when only `null` or `undefined` should fall back;
- use `||` when every falsy value should fall back;
- use an explicit comparison when the domain rule is more specific;
- prefer a readable branch when a compact expression hides the decision.

This turns the operator into a consequence of the rule rather than a memorized trick.

## Connection to real projects

Ticket quantities, pagination limits, form fields, and dashboard filters can all contain valid zero or empty values. The same distinction appears in Fajar Works when optional metadata is parsed: absence should be handled deliberately instead of being confused with any falsy value.

Control flow is also part of content validation, route selection, status labels, and deciding whether optional sections should render.

## Outcome and next review

The section is complete and has been reinforced through output prediction and correction exercises. I can explain why the ticket-limit example preserves zero and which operator would break it.

The next review should combine several conditions into one small validation function, then simplify it only after every branch has a named reason to exist.
