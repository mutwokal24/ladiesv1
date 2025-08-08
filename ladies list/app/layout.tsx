
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ladies List — Local Classifieds",
  description: "Buy & sell locally with a modern, safe marketplace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <div className="container py-3 flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Ladies List" width={40} height={40} className="rounded" />
              <span className="font-bold text-xl">Ladies List</span>
            </Link>
            <nav className="ml-auto flex gap-4">
              <Link href="/listings/new" className="btn">Post ad</Link>
              <Link href="/listings">Browse</Link>
              <Link href="/messages">Messages</Link>
              <Link href="/profile">Profile</Link>
            </nav>
          </div>
        </header>
        <main className="container py-6">{children}</main>
        <footer className="container py-10 text-sm text-gray-600">
          <div className="flex justify-between">
            <p>© {new Date().getFullYear()} Ladies List</p>
            <p><Link href="/admin">Admin</Link></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
