---
title: "Modern JavaScript: Functions, Scope & Execution Context"
slug: "modern-javascript-functions-scope"
excerpt: "A reviewed course record about function forms, scope lookup, arrow functions, IIFE, hoisting, and the concepts that still need deliberate practice."
loggedAt: "2026-06-10"
updatedAt: "2026-06-30"
published: true
status: "Completed"
category: "Course Log"
source: "Udemy - Modern JavaScript From The Beginning 2.0"
module: "Section 4 - Functions, Scope & Execution Context"
progress: "Section 4 Completed / Review Required"
topics:
  - "Functions"
  - "Parameters and Arguments"
  - "Scope"
  - "Arrow Functions"
  - "IIFE"
  - "Hoisting"
---

## Session objective

The objective of this section was not only to recognize function syntax. I wanted to understand how a function receives data, where it can read variables from, what it returns, and why different declarations behave differently before execution reaches them.

My minimum completion signal was being able to write a small function without copying the instructor, predict its output, and explain which scope owns each variable.

## Concepts I can explain

### Function forms and parameters

A function declaration gives a reusable block of behaviour a name. Parameters describe the values the function expects; arguments are the concrete values supplied when it is called. Default and rest parameters change how missing or repeated inputs are handled.

Function expressions and arrow functions can also be assigned to variables. The shorter syntax is useful, but it does not automatically make the reasoning clearer.

### Scope lookup

JavaScript first looks for a variable in the current scope. If it cannot find the name there, it continues outward through the surrounding lexical scopes. A function can read an outer variable, while a variable created inside that function is not available outside it.

This lookup rule is clearer to me than it was during the first watch, although deeply nested scopes still require slower reading.

### IIFE and hoisting

An IIFE runs immediately after it is created and can isolate variables from the surrounding scope. Hoisting is not simply “moving code to the top”; different declarations are created and initialized at different stages, which is why a function declaration and a function expression do not always behave the same before their written line.

## Practice evidence

I used a small order-total example because it gives every variable a visible role:

```js title="Scope practice: order total" showLineNumbers
const serviceFee = 2_000;

const calculateTotal = (prices) => {
  const subtotal = prices.reduce(
    (total, price) => total + price,
    0,
  );

  return subtotal + serviceFee;
};

console.log(calculateTotal([12_000, 18_000]));
```

`prices` and `subtotal` belong to the function call. `serviceFee` is found in the outer scope. Before running the code, I should be able to predict the result and explain why `subtotal` cannot be read after the function finishes.

## What remained difficult

Lexical scope becomes harder when several functions are nested and use similar variable names. I also still need practice explaining the creation phase behind hoisting without relying on vague phrases.

IIFE syntax is recognizable, but I do not yet reach for it naturally. That is acceptable: recognition is not the same as knowing when a pattern is useful.

## Correction and review note

My earlier mistake was treating concise syntax as proof that I understood the function. The correction is to review behaviour instead of appearance:

1. identify every input;
2. predict the return value;
3. mark which scope owns each variable;
4. change one input or declaration;
5. explain why the output changed.

If I cannot complete those steps, the section is finished in the course but not yet stable in memory.

## Connection to real projects

Fajar Works uses functions to parse content, format dates, calculate related entries, and transform Markdown metadata into page data. Scope matters because those functions should receive only the dependencies they need instead of silently relying on unrelated global state.

Arrow functions are common in array operations and component callbacks. The course example becomes more useful when I can locate the same reasoning inside a real content pipeline.

## Outcome and next review

The section is completed, but nested scope, IIFE, and precise hoisting explanations remain review items. My next review should use three small output-prediction exercises followed by one change to an actual Fajar Works utility.

The goal is not to rewatch the entire section. It is to find the exact concept that still breaks when the example changes.
