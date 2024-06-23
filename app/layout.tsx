import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pflanzen-App",
  description: "Eine App für Pflanzen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <header className="p-4 flex items-center justify-between" style={{ backgroundColor: "#FDCA40" }}>
          <div className="flex items-center">
            <img src="/Logo.png" className="w-12 h-12" alt="Logo" />
            <nav className="ml-4 flex gap-8">
              <Link href="/">Home</Link>
              <Link href="/Shop">Shop</Link>
              <Link href="/Kontakt">Kontakt</Link>
              <Link href="/Impressum">Über Uns</Link>
            </nav>
          </div>
          <div className="flex items-center bg-white p-2 rounded">
            <input type="search" placeholder="Search" className="w-24 h-4 p-1" />
            <img src="/search-svgrepo-com.svg" className="w-4 h-4 inline" alt="Search" />
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-200 p-4 text-center">
          <Link href="/Impressum">Impressum</Link>
        </footer>
      </body>
    </html>
  );
}
