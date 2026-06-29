---
title: "Learning JavaScript with Notes and Progressive Practice"
slug: "learning-javascript-with-notes-and-practice"
excerpt: "A candid learning note about replacing a two-month race to Next.js with a slower loop of recall, practice, correction, and connection to real projects."
publishedAt: "2026-06-15"
updatedAt: "2026-06-29"
status: "Published"
category: "Learning Note"
language: "en"
featured: false
tags:
  - "JavaScript"
  - "Learning"
  - "Programming"
  - "Study Method"
---

## Where I actually am

I am learning JavaScript through a Udemy course, but finishing videos and understanding the material are not the same thing. I can often follow an explanation while it is happening and still struggle to rebuild the idea later without the instructor's code in front of me.

That gap is now the real subject of my study. The goal is no longer to make the progress bar move as quickly as possible. The goal is to notice what I can explain, what I can use, and what still collapses when the example changes.

## The expectation that burned me out

I expected myself to move from JavaScript to React and then Next.js in roughly two or three months. A sprint made the plan feel measurable, but it also turned every confusing lesson into evidence that I was behind.

The result was burnout: too much input, too little recovery, and an expectation that understanding should arrive on schedule. I still want to complete the full course. What has changed is the role of the deadline. It can be a planning signal, but it cannot be the definition of whether I am learning well.

> Finishing the course remains a goal. Racing through it is no longer the method.

## A learning loop I can repeat

I now separate raw learning records from published notes. A Learning Log captures one video, challenge, or course project. A note like this one looks across several logs and asks what pattern or opinion is worth keeping.

### After a video lesson

I record the video number and title, the central idea, three things I understood, one small code example, what is still unclear, and where the idea could appear in a real project.

### After a challenge

I write down the target output before looking at the correction. I preserve my first attempt, mark the exact part I doubted, and then explain why the correction works. The difference between my approach and the correction is often more useful than the final answer.

### After a course project

I summarize the project, identify the few files that carry the important decisions, and add my own opinion. This keeps the record focused on architecture and reasoning instead of becoming a list of every file I touched.

The loop is simple: **recall → attempt → compare → explain → connect**. It is slower than passive watching, but each step leaves evidence of what I can do without the video.

## What code evidence should prove

A code block belongs in a learning note only when I can explain the result before I run it. For example, a small exercise is more useful when I annotate the change in state than when I merely copy a larger application:

```js title="Practice pattern: predict, run, explain" showLineNumbers
const prices = [12_000, 18_000, 10_000];

const total = prices.reduce(
  (currentTotal, price) => currentTotal + price,
  0,
);

console.log(total); // 40_000
```

The important question is not “Do I recognize `reduce`?” It is “Can I explain the accumulator, the initial value, and what changes on every iteration?” If I cannot, the snippet becomes a prompt for another small practice session.

## What I understand and what remains unclear

I understand that repetition alone is not enough. Recall exposes weak memory, challenges expose weak reasoning, and corrections expose assumptions I did not know I was making. Connecting a lesson to Fajar Works or another project also makes abstract material easier to retain.

What remains difficult is deciding when understanding is sufficient to move on. I do not need perfect mastery before the next lesson, but I do need a minimum signal: I can restate the idea, modify a small example, and name the part I still need to revisit.

That uncertainty should be recorded rather than hidden. “Still unclear” is not a failed section of the note; it is the queue for the next experiment.

## Connection to real projects

Fajar Works gives the course material somewhere to land. Arrays and object transformations relate to content lists. Functions and modules relate to content loaders. Asynchronous work relates to reading files and rendering pages. React and Next.js become less abstract when I can point to a real component or route that needs the idea.

I do not need to force every lesson into production code. Sometimes the honest connection is simply: “This concept is not needed yet.” That is still more useful than inventing a feature just to prove I studied it.

## A pace I can sustain

I will keep the course as a long path, not a short verdict. A sprint can define a small batch of lessons, followed by review and rest. It should not demand that JavaScript, React, and Next.js all become comfortable within one compressed window.

My new measure of progress is evidence:

- one idea I can explain without the video;
- one exercise I attempted before seeing the answer;
- one mistake I can now name;
- one connection to a real project;
- one clear next question.

This pace may look slower on a course dashboard. In practice, it gives me a better chance of finishing the course without turning the finish line into another reason to stop.
