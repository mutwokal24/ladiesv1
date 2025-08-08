
/**
 * Very simple server-side search helper using Postgres full-text search.
 * For production, consider Algolia/Meilisearch. This keeps infra minimal.
 */
import { prisma } from "./db";

export async function searchListings(opts: {
  q?: string; categorySlug?: string;
  min?: number; max?: number; city?: string;
  sort?: "new"|"price_asc"|"price_desc";
  take?: number; skip?: number;
}) {
  const { q, categorySlug, min, max, city, sort="new", take=20, skip=0 } = opts;
  const where:any = { status: "ACTIVE" };
  if (city) where.city = { equals: city, mode: "insensitive" };
  if (min != null || max != null) where.price = { gte: min ?? 0, lte: max ?? 999999 };
  if (categorySlug) where.category = { slug: categorySlug };
  // Note: This is a pragmatic LIKE search; add tsvector migration for full-text.
  if (q) where.OR = [
    { title: { contains: q, mode: "insensitive" } },
    { description: { contains: q, mode: "insensitive" } }
  ];
  const orderBy = sort === "price_asc" ? { price: "asc" } :
                  sort === "price_desc" ? { price: "desc" } :
                  { createdAt: "desc" };
  const [items, count] = await Promise.all([
    prisma.listing.findMany({ where, orderBy, take, skip, include: { category: true, owner: true } }),
    prisma.listing.count({ where })
  ]);
  return { items, count };
}
