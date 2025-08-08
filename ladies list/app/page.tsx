
import { prisma } from "@/lib/db";
import ListingCard from "@/components/ListingCard";
import Link from "next/link";

export default async function Home() {
  const items = await prisma.listing.findMany({ 
    take: 12, orderBy: { createdAt: "desc" } 
  });
  return (
    <div className="space-y-6">
      <section className="text-center py-10">
        <h1 className="text-4xl font-extrabold">Buy & sell locally with style 💖</h1>
        <p className="mt-2 text-gray-700">Safe messaging, powerful search, and pink vibes.</p>
        <div className="mt-4 flex gap-3 justify-center">
          <Link href="/listings/new" className="btn">Post an ad</Link>
          <Link href="/listings" className="btn bg-white text-brand-dark border border-brand-dark">Browse</Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">Newest listings</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map(item => <ListingCard key={item.id} item={item} />)}
        </div>
      </section>
    </div>
  );
}
