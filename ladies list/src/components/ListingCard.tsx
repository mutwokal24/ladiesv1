
import Image from "next/image";
import Link from "next/link";

export default function ListingCard({ item }: { item: any }) {
  const cover = Array.isArray(item.images) && item.images.length ? item.images[0] : "/placeholder.png";
  return (
    <Link href={`/listing/${item.id}`} className="card p-3 block">
      <div className="aspect-video relative rounded overflow-hidden bg-pink-50">
        <Image src={cover} alt={item.title} fill style={{objectFit:'cover'}} />
      </div>
      <div className="mt-2">
        <h3 className="font-semibold line-clamp-1">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.city || ''}</p>
        <p className="font-bold">${Number(item.price)}</p>
      </div>
    </Link>
  );
}
