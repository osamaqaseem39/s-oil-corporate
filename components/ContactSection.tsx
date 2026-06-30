"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <section className="bg-surface border-t border-border py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              Contact Us
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Get in Touch With Our Team
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Have a question about our products, need technical support, or want to
              explore a partnership? Send us a message and we&apos;ll respond within
              24–48 hours.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                {company.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-muted">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                {company.address}
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View full contact page
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-6">Send a Message</h3>
            <ContactForm type="contact" idPrefix="footer" />
          </div>
        </div>
      </div>
    </section>
  );
}
