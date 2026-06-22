"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "Company" },
  { href: "/products", label: "Business" },
  { href: "/careers", label: "Sustainability" },
  { href: "/partners", label: "Relation" },
];

function Logo({ transparent }: { transparent: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-0.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent font-bold text-primary text-xl">
        S
      </span>
      <span
        className={`text-xl font-bold tracking-tight ${
          transparent ? "text-white" : "text-primary"
        }`}
      >
        -OIL
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`z-50 w-full transition-colors duration-300 ${
        isHome ? "fixed top-0 left-0 bg-transparent" : "sticky top-0 bg-white shadow-sm"
      }`}
    >
      {/* Main navigation */}
      <div
        className={
          isHome
            ? "bg-transparent border-b border-white/10"
            : "border-b border-border bg-white"
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Logo transparent={isHome} />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isHome
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/products"
              className={`hidden sm:inline-flex rounded px-4 py-2 text-sm font-medium transition-colors ${
                isHome
                  ? "border border-white/40 text-white hover:bg-white/10"
                  : "border border-border text-foreground/80 hover:border-primary hover:text-primary"
              }`}
            >
              Find Product
            </Link>

            <details className="relative lg:hidden">
              <summary
                className={`flex cursor-pointer list-none items-center justify-center rounded p-2 transition-colors ${
                  isHome
                    ? "text-white hover:bg-white/10"
                    : "border border-border text-foreground/80 hover:border-primary hover:text-primary"
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-56 rounded-lg border border-border bg-white py-2 shadow-xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary-light hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border mt-2 pt-2 px-4">
                  <Link href="/products" className="text-sm font-medium text-primary">
                    Find Product →
                  </Link>
                </div>
              </div>
            </details>

            <Link
              href="/contact"
              className={`hidden sm:flex items-center justify-center rounded p-2 transition-colors ${
                isHome
                  ? "border border-white/40 text-white hover:bg-white/10"
                  : "border border-border text-foreground/80 hover:border-primary hover:text-primary"
              }`}
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
