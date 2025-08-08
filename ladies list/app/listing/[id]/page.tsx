
import { prisma } from "@/lib/db";
import Image from "next/image";

export default async function ListingDetail({ params }: { params: { id: string } }) {
  const item = await prisma.listing.findUnique({ where: { id: params.id } });
  if (!item) return <div>Not found</div>;
  const images = Array.isArray(item.images) ? item.images : [];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-3">
        <div className="aspect-video relative rounded overflow-hidden bg-pink-50">
          <Image src={images[0] || "/placeholder.png"} alt={item.title} fill style={{objectFit:'cover'}} />
        </div>
        <h1 className="text-3xl font-extrabold">{item.title}</h1>
        <p className="text-lg font-bold">${Number(item.price)}</p>
        <p className="whitespace-pre-wrap">{item.description}</p>
      </div>
      <aside className="card p-4">
        <p className="font-semibold">Seller</p>
        <p className="text-sm text-gray-600">Anonymous (wire real auth later)</p>
        <button className="btn w-full mt-3">Message Seller</button>
      </aside>
    </div>
  );
}
