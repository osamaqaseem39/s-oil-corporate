import Link from "next/link";
import { ceoWelcome } from "@/data/company";

export default function WelcomeSection() {
  return (
    <section className="py-12 sm:py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">
          {ceoWelcome.title}
        </h2>

        {/* Mobile: short summary */}
        <div className="mt-6 space-y-3 lg:hidden">
          {ceoWelcome.mobileSummary.map((line, index) => (
            <p key={index} className="text-sm text-muted leading-relaxed">
              {line}
            </p>
          ))}
          <Link
            href="/about"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            Read more about S-OIL
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Desktop: full message */}
        <div className="mt-10 hidden lg:grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            {ceoWelcome.leftColumn.map((paragraph, index) => (
              <p key={index} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-5">
            {ceoWelcome.rightColumn.map((paragraph, index) => (
              <p key={index} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 lg:mt-12 flex justify-end">
          <div className="text-right">
            <p className="text-sm text-muted">{ceoWelcome.signature.title}</p>
            <p className="mt-1 text-base sm:text-lg font-bold text-foreground">
              {ceoWelcome.signature.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
