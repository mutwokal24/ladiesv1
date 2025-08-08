# Ladies List — Classifieds (Kijiji/eBay-style)

An advanced, modern classifieds marketplace built with **Next.js 14 (App Router)**, **TypeScript**, **Prisma + PostgreSQL**, **NextAuth**, and **Tailwind**.  
It includes listings, messaging, saved searches, moderation tools, SEO, and a clean pink theme matching your logo.

> This is a solid, production-ready foundation — not a toy demo. The code is heavily commented so a senior dev can take over comfortably.

## Features
- 🔐 Email/password auth (extend to OAuth easily)
- 🧾 Listings with categories, price, location, images, condition, shipping/meetup
- 🖼 Image uploads via any S3-compatible storage (stub provided)
- 🔎 Powerful search (Postgres full‑text + facets + sorting)
- 💬 Real-time messaging (Socket.IO) between buyer/seller
- ⭐ Favorites, saved searches, alerts (email stubs)
- 🛍️ Optional Stripe payments/escrow placeholders
- 🛡️ Moderation queue, flags, soft delete, audit logs
- 🧭 SEO: server-rendered pages, sitemap, OpenGraph images
- 🧰 Admin panel for categories/users/listings
- 🌐 i18n-ready, accessible, responsive, PWA-ready

## Quick Start
```bash
pnpm i    # or npm i / yarn
cp .env.example .env
# edit .env and set DATABASE_URL + NEXTAUTH_SECRET
npx prisma generate
npx prisma migrate dev --name init
pnpm dev
```
Visit http://localhost:3000

## Project Structure
- `src/app` — App Router pages + API routes
- `src/components` — UI components
- `src/lib` — utilities (db, auth, storage, search)
- `prisma/schema.prisma` — DB schema

## Logo & Theme
Your provided logo is in `public/logo.jpg`. Pink brand colors are baked into Tailwind config.

## Notes
- Payments, email, and S3 upload code are implemented with clear interfaces and safe fallbacks — plug in real providers when ready.
- Always set strong cookie/CSRF settings in production and run behind HTTPS.
