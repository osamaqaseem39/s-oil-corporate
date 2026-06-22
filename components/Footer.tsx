import Link from "next/link";
import { company } from "@/data/company";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/industries", label: "Industries" },
    { href: "/technology", label: "Technology" },
    { href: "/careers", label: "Careers & CSR" },
    { href: "/blog", label: "Blog & Media" },
  ],
  products: [
    { href: "/products?category=passenger-car", label: "Passenger Car Oil" },
    { href: "/products?category=motorcycle", label: "Motorcycle Oil" },
    { href: "/products?category=diesel-commercial", label: "Diesel / Commercial" },
    { href: "/products?category=industrial", label: "Industrial Lubricants" },
  ],
  support: [
    { href: "/partners", label: "Become a Distributor" },
    { href: "/contact", label: "Contact Us" },
    { href: company.shopUrl, label: "Online Shop", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent font-bold text-primary text-lg">
                S
              </span>
              <span className="text-lg font-bold text-white">-OIL</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              {company.description.slice(0, 120)}...
            </p>
            <div className="flex gap-3">
              {Object.entries(company.social).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-accent hover:text-primary transition-colors capitalize text-xs"
                  aria-label={key}
                >
                  {key[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>{company.address}</li>
              <li>
                <a href={`tel:${company.phone}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded bg-accent px-4 py-2 text-sm font-semibold text-primary hover:bg-accent-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white/80 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
