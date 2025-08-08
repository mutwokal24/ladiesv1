
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

async function create(data: FormData) {
  "use server";
  const title = String(data.get("title") || "");
  const price = Number(data.get("price") || 0);
  const description = String(data.get("description") || "");
  const city = String(data.get("city") || "");
  if (!title || !price) throw new Error("Missing required fields");
  const item = await prisma.listing.create({
    data: {
      title, price, description, city,
      images: [], ownerId: "anon-user" // TODO: attach to session user
    }
  });
  redirect(`/listing/${item.id}`);
}

export default function NewListing() {
  return (
    <form action={create} className="card p-4 space-y-3 max-w-xl">
      <h1 className="text-2xl font-bold">Post an ad</h1>
      <input name="title" placeholder="Title" className="w-full border rounded p-2" required />
      <input name="price" type="number" step="0.01" placeholder="Price" className="w-full border rounded p-2" required />
      <input name="city" placeholder="City" className="w-full border rounded p-2" />
      <textarea name="description" placeholder="Describe your item" className="w-full border rounded p-2 h-32" />
      <button className="btn" type="submit">Publish</button>
    </form>
  );
}
