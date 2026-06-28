---
title: "Baturraden Apps"
slug: "baturraden-apps"
summary: "A digital tourism ticketing application with online payments, QR tickets, PDF generation, and admin validation."
year: 2025
status: "Completed"
category: "Full-stack Web Application"
role: "Full-stack Developer"
context: "Academic Final Project"
published: true
featured: true
order: 1
stack:
  - "Next.js"
  - "TypeScript"
  - "Prisma"
  - "MySQL"
  - "Midtrans"
  - "Firebase"
  - "QR Code"
  - "pdf-lib"
responsibilities:
  - "Full-stack architecture across visitor and admin workflows"
  - "Midtrans payment and transaction-status synchronization"
  - "Per-visitor QR and PDF ticket generation"
  - "Administrative tourism content and ticket validation workflows"
  - "Usability and endpoint performance evaluation"
repositoryUrl: "https://github.com/fjrRA/qr-ticketing-app"
coverImage: "/images/projects/baturraden-apps/cover.png"
---

## Project Brief

Baturraden Apps is an academic final project that explores a complete tourism-ticketing workflow rather than a single booking screen. It connects destination discovery, visitor details, online payment, transaction history, downloadable tickets, and on-site validation inside one system.

The product has two operating surfaces. Visitors can explore tourism information and manage their own tickets, while administrators can maintain destination data, monitor transactions, and validate admission.

> The central design problem was state continuity: a booking only becomes useful when its payment state, individual tickets, downloadable proof, and entrance validation all remain connected.

## The Problem

A tourism ticket passes through more states than a typical content record. The system needed to answer several operational questions without asking visitors or administrators to reconcile data manually:

- Which destination, date, ticket type, and visitor belong to an order?
- Has the payment gateway confirmed the transaction?
- Can one order issue a separate ticket for every visitor?
- Has a ticket already been used at the entrance?
- Can destination details, facilities, opening hours, galleries, and quotas be maintained from the admin side?

The difficult part was therefore not the purchase button. It was keeping the order, payment, ticket, and validation records consistent across the entire journey.

## Product Flow

1. A visitor opens a destination page and reviews its description, facilities, operating hours, map, gallery, reviews, and available tickets.
2. The visitor chooses tickets, supplies a visit date and visitor names, then creates an order.
3. Midtrans processes the payment and sends the resulting transaction status back to the application.
4. A successful status changes the local transaction to `paid` and preserves the payment response for administrative review.
5. Each transaction detail becomes an individual downloadable ticket with its own visitor name and usage state.
6. The PDF embeds a QR code that resolves to one transaction-detail record.
7. An administrator scans the code and changes the ticket from unverified to verified, preventing normal reuse.

![Paid transaction history with downloadable tickets for each visitor](/images/projects/baturraden-apps/history.png "Paid and cancelled transactions remain visible while each visitor receives an individual download action [1763x2517]")

## Main Features

| Capability | Product value | Implementation evidence |
| --- | --- | --- |
| Destination catalogue | Visitors can evaluate a destination before buying | Tourism categories, villages, facilities, galleries, maps, operating hours, and reviews are represented in the Prisma schema |
| Online payment | Orders move from intent to a recorded payment state | Midtrans transaction creation and notification handlers synchronize gateway and local records |
| Per-visitor tickets | Group purchases do not collapse into one ambiguous admission record | Every transaction contains individual `transaction_detail` rows with visitor and ticket data |
| PDF and QR delivery | A paid visitor receives portable proof of admission | `qrcode` generates the identifier and `pdf-lib` composes the downloadable ticket |
| Ticket history | Visitors can inspect paid, pending, cancelled, used, and unused records | History and ticket pages group details under their transaction code |
| Administrative operations | Tourism content and entrance validation live in the same operational system | Admin routes manage destinations, facilities, tickets, payments, dashboards, and QR scanning |

![Ticket list grouped by transaction with per-visitor usage state](/images/projects/baturraden-apps/ticketing-list.png "The ticket list exposes payment state, individual visitors, usage state, totals, filtering, search, and pagination [1763x2764]")

## System Architecture

The application uses Next.js for the interface and API routes, Prisma as the data-access layer, and MySQL for persistent storage. Firebase supports authentication, while Midtrans, `qrcode`, and `pdf-lib` handle the external payment and ticket-delivery concerns.

The transaction model separates the concerns deliberately:

- `transaction` stores the order-level date, total, visit date, owner, and payment state.
- `transaction_detail` stores one ticket and visitor per admission record.
- `payment` retains gateway references, status, amount, time, and the response payload.
- `temp_order` preserves order intent until an asynchronous payment notification can finalize it.

This separation allows one payment to produce multiple independently downloadable and verifiable tickets.

## Critical Code

Only three excerpts are essential to explain the system. They show where an external payment becomes local state, where one admission record becomes a portable ticket, and where reuse is rejected.

**1. Synchronizing a successful payment**

The callback maps successful Midtrans states to the local transaction. This is the boundary where the application decides that tickets may be treated as paid.

```ts title="Payment notification to local state"
if (
  transaction_status === "settlement" ||
  transaction_status === "capture" ||
  transaction_status === "accept"
) {
  await prisma.transaction.update({
    where: { transaction_code: transaction.transaction_code },
    data: { transaction_status: "paid" },
  });
}
```

**2. Generating one QR-enabled PDF per visitor**

The PDF endpoint resolves a single transaction detail, uses that detail ID as the QR payload, then composes the visitor, ticket, and transaction data into a download.

```ts title="Per-visitor PDF ticket"
const qrUrl = await generateQRCode(
  `${detail.transaction_detail_id}`,
);

const pdfBuffer = await generateTicketPdf(
  transaction.transaction_code,
  qrUrl,
  `${name},${ticketName},${date.toISOString()}`,
);
```

**3. Rejecting an already-used ticket**

Validation checks the current detail state before changing it. The operational rule is intentionally simple: a verified admission cannot pass through the normal validation path twice.

```ts title="Single-use ticket validation"
if (detail.is_used === "verified") {
  return res.status(400).json({
    error: "Tiket sudah digunakan",
  });
}

await prisma.transaction_detail.update({
  where: { transaction_detail_id: detailId },
  data: { is_used: "verified" },
});
```

![Generated PDF admission ticket containing visitor data and a QR identifier](/images/projects/baturraden-apps/qr-ticket.png "The generated PDF carries the transaction, visitor, destination, visit date, and scannable ticket identifier [1884x793]")

## Evaluation

The academic project included usability testing and endpoint-performance measurements. The current repository, however, does not preserve the raw questionnaires, timing table, sample size, or calculation sheets. This case study therefore does not publish invented scores.

The evidence that can be evaluated directly is the implemented workflow:

| Area | What the current build demonstrates | Evidence boundary |
| --- | --- | --- |
| End-to-end continuity | A paid order can produce individual tickets that remain connected to the transaction | Demonstrated by the API routes, relational schema, and captured interface states |
| Admission control | A ticket detail can be resolved, checked, and marked as verified | The repository shows the intended happy path; production concurrency testing is not documented |
| Status visibility | Visitors can distinguish payment and usage states in ticket history | Screenshots show paid, cancelled, used, and unused records |
| Operational breadth | The same application covers visitor and administrative work | The repository contains both user-facing and admin routes and components |
| Quantitative usability and performance | The final-project scope states that these were measured | Raw result data is unavailable, so no numerical conclusion is claimed here |

## Reflection & Next Pass

The strongest outcome is the complete chain between payment and physical admission. The project goes beyond CRUD by coordinating an external payment service, relational state, generated documents, and an administrative validation action.

A production-focused iteration would prioritize:

1. Verifying Midtrans notification signatures or checking status server-to-server before mutating local payment state.
2. Consolidating `is_used` and `used_at` into one authoritative ticket-usage model.
3. Adding schema-based request validation and consistent error contracts across API routes.
4. Making payment callbacks idempotent and wrapping multi-record updates in database transactions.
5. Removing sensitive debug payloads and adding structured operational logging.
6. Preserving raw usability and performance datasets beside the final report so results remain auditable.
7. Adding automated integration tests for payment callbacks, ticket generation, and repeated validation attempts.

The project proved that the workflow is technically achievable. The next step is not adding more surface features; it is hardening the state transitions that make the system trustworthy.
