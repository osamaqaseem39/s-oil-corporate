import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  company,
  certifications,
  presence,
} from "@/data/company";
import { PageHero, SectionHeading } from "@/components/ui";
import {
  CompanyFactsGrid,
  CompanyHighlightsGrid,
  BusinessPortfolio,
  VisionMissionCards,
  CoreValuesGrid,
  CompanyHistoryTimeline,
} from "@/components/CompanyDetails";

export const metadata: Metadata = {
  title: "Company",
  description: `Learn about ${company.name} — our vision, business portfolio, history, global presence, and certifications.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Company"
        subtitle="To be the most competitive, innovative and trusted energy & chemical company."
        breadcrumb={[{ label: "Company" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                label="Company Overview"
                title="A Legacy of Lubricant Excellence"
                description={company.description}
                align="left"
              />
              <p className="text-muted leading-relaxed">
                Established in {company.founded}, {company.legalName} operates
                state-of-the-art blending facilities with a commitment to research
                and development. Our products are trusted by individual motorists,
                commercial fleet operators, and industrial clients across Pakistan
                and beyond.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-medium text-foreground">Legal Name</dt>
                  <dd className="mt-1 text-muted">{company.legalName}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Headquarters</dt>
                  <dd className="mt-1 text-muted">{company.headquarters}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Founded</dt>
                  <dd className="mt-1 text-muted">{company.founded}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Employees</dt>
                  <dd className="mt-1 text-muted">{company.employees}</dd>
                </div>
              </dl>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/blog-maintenance.jpg"
                alt="S-OIL lubricants and engine maintenance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
              <div className="absolute inset-0 flex items-end p-8">
                <p className="text-lg font-semibold text-white">
                  Premium Lubricants Since {company.founded}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <CompanyFactsGrid />
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Company"
            title="Our Strengths & Achievements"
            description="Building trust through innovation, sustainability, and a proven track record."
          />
          <CompanyHighlightsGrid />
          <div className="mt-10 text-center">
            <Link
              href="/about/competitiveness"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Read full competitiveness report
              <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <BusinessPortfolio />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <VisionMissionCards />
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            description="The principles that guide every product we make and every partnership we build."
          />
          <CoreValuesGrid />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Our History"
            title="History of S-OIL"
            description="From our founding to the present — milestones that shaped who we are today."
          />
          <CompanyHistoryTimeline />
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Global Presence"
            title="Serving Markets Worldwide"
            description="From our manufacturing base in Pakistan, we are expanding our reach across key markets."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {presence.map((item) => (
              <div
                key={item.region}
                className="rounded-xl border border-border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-primary">{item.region}</h3>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Certifications"
            title="Quality You Can Trust"
            description="Our products and processes are certified to the highest international standards."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl bg-white p-6 text-center shadow-md border border-border"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-white font-bold text-sm">
                  {cert.name.split(" ")[0]}
                </div>
                <h3 className="font-bold text-foreground">{cert.name}</h3>
                <p className="mt-2 text-sm text-muted">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
