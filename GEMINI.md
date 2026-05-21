# GEMINI.md

This file provides guidance to Gemini (Antigravity) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start dev server at http://localhost:3000
pnpm build    # Production build
pnpm lint     # Run ESLint
```

No test suite is configured.

## Environment

Requires `.env.local` with:
```
NEXT_PUBLIC_API_URL=<backend URL>
```

Use the Firebase Emulator URL locally; swap to the production URL before deploying to Vercel/Netlify.

## Architecture

**Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

### Data flow

All product data comes from a REST API (`services/api.ts`) whose base URL is `NEXT_PUBLIC_API_URL`. The two functions are:

- `getProducts(page, limit, category?)` — paginated list; returns `{ ok, data: Product[], pagination }`
- `getProductById(id)` — single product by code (e.g. `"AZ01"`)

### Server / Client split

Pages under `src/app/` are **server components** by default and fetch data at request time (`cache: "no-store"`). Interactive pages use a companion `*Client.tsx` file marked `"use client"`. Example: `/examenes/page.tsx` fetches and passes props to `ExamenesClient.tsx`, which owns search state, category filter, pagination URL updates, and the product-detail modal.

### Cart and Checkout Flow

The shopping cart is managed globally via the `CartProvider` in `src/context/CartContext.tsx`. Pages and components can access state through `useCart()`.
- **Checkout Wizard**: Located at `src/app/carrito/agendar/page.tsx`. It features a 2-step checkout:
  1. Address capture with mock Google Maps API integration.
  2. Order summary, confirmed address review, billing calculations (adds $5.00 delivery fee), and a mock "Pagar" button.

### Styling conventions

Tailwind v4 custom theme is defined in `src/app/globals.css` via `@theme`. Two brand color scales are available everywhere:

- `azlab-blue-*` — dark navy (base `#202b52`, goes from 50→900)
- `azlab-green-*` — brand green (base `#2AA737`, goes from 50→900)

Custom utilities:
- `font-rockin` — applies the local "Rockin Record" display font (used in the logo)
- `icon-filled` — sets `font-variation-settings` for filled Material Symbols

Icons come from **Material Symbols Outlined** (loaded via Google CDN in `layout.tsx`). Use `<span className="material-symbols-outlined">icon_name</span>`.

### Product data shape

```ts
interface Product {
  id: string;        // same as code, e.g. "AZ01"
  code: string;
  codeNumber: number;
  name: string;
  category: string;  // one of the 14 categories in ExamenesClient.tsx
  description: string;
  price: number;
  currency: string;  // "USD"
  active: boolean;
  updatedAt: string;
}
```

See `services/response-example.json` for a full sample API response.
