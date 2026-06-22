"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "Company" },
  { href: "/technology", label: "Technology" },
  { href: "/blog", label: "Blog" },
];

function Logo({ light }: { light: boolean }) {
  if (light) {
    return (
      <Link href="/" className="flex items-center shrink-0" aria-label="S-OIL Home">
        <Image
          src="/logo.png"
          alt="S-OIL"
          width={100}
          height={36}
          priority
          className="h-8 w-auto sm:h-9 brightness-0 invert"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center shrink-0" aria-label="S-OIL Home">
      <Image
        src="/logo.png"
        alt="S-OIL"
        width={100}
        height={36}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isFloating = scrolled;
  const isTransparentTop = isHome && !scrolled;

  return (
    <header
      className={`z-50 w-full transition-all duration-500 ease-out ${
        isFloating
          ? "fixed top-0 left-0 right-0 px-4 pt-4"
          : isHome
            ? "fixed top-0 left-0 right-0"
            : "sticky top-0"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
          isFloating
            ? "max-w-4xl rounded-full border border-white/70 bg-white/75 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:max-w-5xl sm:px-6"
            : `max-w-7xl px-4 py-3 ${
                isTransparentTop
                  ? "border-b border-white/10 bg-transparent"
                  : "border-b border-border bg-white shadow-sm"
              }`
        }`}
      >
        <Logo light={isTransparentTop} />

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isTransparentTop
                  ? "text-white/90 hover:text-white"
                  : pathname === link.href
                    ? "text-primary"
                    : "text-foreground/75 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              isFloating || !isTransparentTop
                ? "bg-primary text-white hover:bg-primary-dark shadow-sm"
                : "border border-white/40 text-white hover:bg-white/10"
            }`}
          >
            Contact
          </Link>

          <details className="relative lg:hidden">
            <summary
              className={`flex cursor-pointer list-none items-center justify-center rounded-full p-2 transition-colors ${
                isTransparentTop
                  ? "text-white hover:bg-white/10"
                  : "text-foreground/80 hover:bg-primary-light hover:text-primary"
              }`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-border bg-white/95 py-2 shadow-xl backdrop-blur-xl max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary-light hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border mt-2 pt-2 px-4 space-y-2">
                <Link href="/partners" className="block text-sm text-foreground/80 hover:text-primary">
                  Partners
                </Link>
                <Link href="/careers" className="block text-sm text-foreground/80 hover:text-primary">
                  Careers
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
