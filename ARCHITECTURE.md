# Architecture and Barakaz Reuse Plan

## Current scaffold
- React 18 + TypeScript + Vite
- Styling in src/styles.css
- Product data in src/catalog.ts
- Storefront and cart interactions in src/App.tsx
- Cart is persisted in localStorage as a *preview only*. Browser storage is not an order ledger.
- No database, credentials, payment provider or external APIs are connected.

## Intended production architecture
- Independent Derma Delight GitHub repository and Vercel deployment
- Independent Supabase project with Postgres, Auth, Storage and RLS
- Server-side order creation, inventory reservation and payment verification
- Admin/customer role separation, secure server-side privileged actions

## Barakaz migration gate
The previous Barakaz repository URL redirects. **Do not assert code reuse until the correct repository has been inspected.** After obtaining the source:
1. Audit package dependencies, routes, UI components and checkout contracts.
2. Inventory database tables, foreign keys, functions, triggers, storage policies and RLS.
3. Classify modules as reusable, adaptable or marketplace-only.
4. Extract and adapt catalogue, cart, checkout, order and admin modules.
5. Replace tenant/vendor-specific business logic with explicit single-store rules.
6. Review RLS and authorization; do not delete security protections.
7. Add migrations and tests before connecting production data.

## Proposed domain entities (subject to source audit)
products, product_variants, categories, product_images, inventory_movements, customers, addresses, carts, orders, order_items, payments, shipping_options, admin_users, store_settings.

These are conceptual entities, **not** an implemented schema.

## Security requirements
- Never use Supabase service role credentials in client code.
- Do not mark payments successful based on client-side redirects.
- Validate pricing, quantities and inventory on the server.
- Verify provider signatures and use idempotent webhook handling.
- Separate production/staging environments.
- No Barakaz production credentials or customer data may be copied.

## Development order
1. Preliminary storefront (this commit)
2. Approved logo and product imagery
3. Barakaz source audit and component migration
4. Supabase schema, Auth, RLS and admin
5. Pricing, inventory, orders and checkout
6. Payments, delivery, testing and deployment
