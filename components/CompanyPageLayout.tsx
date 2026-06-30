import Image from "next/image";
import Link from "next/link";
import type { CompanyPage } from "@/data/companyPages";

export default function CompanyPageLayout({ page }: { page: CompanyPage }) {
  return (
    <>
      <section className="relative min-h-[360px] overflow-hidden sm:min-h-[420px]">
        <Image
          src={page.image}
          alt={page.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        <div className="relative mx-auto flex min-h-[360px] max-w-7xl flex-col justify-end px-4 py-12 sm:min-h-[420px] sm:py-16">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">
              Company
            </Link>
            <span>/</span>
            <span className="text-white">{page.title}</span>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-5xl">{page.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/80">{page.tagline}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-5">
          {page.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {page.sections?.map((section, index) => (
        <section
          key={section.title}
          className={`py-14 ${index % 2 === 0 ? "bg-surface" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div
                className={`relative min-h-[240px] overflow-hidden rounded-2xl sm:min-h-[300px] ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={section.image || page.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">Explore more about S-OIL.</p>
          <div className="flex gap-3">
            <Link
              href="/about"
              className="inline-flex rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Company Overview
            </Link>
            <Link
              href="/about/competitiveness"
              className="inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Competitiveness
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
