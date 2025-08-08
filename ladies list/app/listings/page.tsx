
import { searchListings } from "@/lib/search";
import ListingCard from "@/components/ListingCard";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Listings({ searchParams }: { searchParams: any }) {
  const { q, sort } = searchParams;
  const { items, count } = await searchListings({ q, sort });
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Browse listings</h1>
        <Link href="/listings/new" className="btn">Post ad</Link>
      </div>
      <p className="text-sm text-gray-600 mb-3">{count} results</p>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((i:any) => <ListingCard key={i.id} item={i} />)}
      </div>
    </div>
  );
}
