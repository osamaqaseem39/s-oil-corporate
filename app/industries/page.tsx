import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { industries } from "@/data/industries";
import { PageHero, SectionHeading, CTABanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "S-OIL lubricants for automotive, commercial fleet, manufacturing, construction, power generation, and motorcycle industries across Pakistan.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="Tailored lubricant solutions for every sector — from everyday motorists to heavy industry and commercial fleets."
        breadcrumb={[{ label: "Industries" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Our Sectors"
            title="Lubricants for Every Application"
            description="We understand that each industry has unique demands. Our product portfolio is engineered to meet the specific challenges of your sector."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.slug}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md border border-border hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {industry.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    {industry.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {industry.applications.slice(0, 3).map((app) => (
                      <li key={app} className="flex items-center gap-2 text-xs text-muted">
                        <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/products"
                    className="mt-5 inline-flex items-center text-sm font-semibold text-primary"
                  >
                    View Products
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Solution for Your Industry?"
        description="Our technical team can recommend the right lubricants for your specific application and operating conditions."
        primaryLabel="Contact Technical Support"
        primaryHref="/contact"
        secondaryLabel="Become a Distributor"
        secondaryHref="/partners"
      />
    </>
  );
}
