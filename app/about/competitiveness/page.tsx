import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import {
  competitivenessPage,
  rucOdcSection,
  odcSection,
  djsiSection,
  sustainabilityLeadership,
} from "@/data/competitiveness";
import { PageHero } from "@/components/ui";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "Competitiveness",
  description: `Learn about ${company.name} competitiveness — RUC/ODC complex, DJSI World recognition, and sustainable leadership.`,
};

export default function CompetitivenessPage() {
  return (
    <>
      <PageHero
        title={competitivenessPage.title}
        subtitle={competitivenessPage.subtitle}
        breadcrumb={[
          { label: "Company", href: "/about" },
          { label: "Competitiveness" },
        ]}
      />

      <ContentSection
        id={rucOdcSection.id}
        title={rucOdcSection.title}
        tagline={rucOdcSection.tagline}
        paragraphs={rucOdcSection.paragraphs}
        image={rucOdcSection.image}
        imagePosition="right"
      />

      <ContentSection
        id={odcSection.id}
        title={odcSection.title}
        paragraphs={odcSection.paragraphs}
        className="bg-surface"
      />

      <ContentSection
        id={djsiSection.id}
        title={djsiSection.title}
        tagline={djsiSection.tagline}
        paragraphs={djsiSection.paragraphs}
        className="bg-surface"
      />

      <section id={sustainabilityLeadership.id} className="py-16 bg-surface">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          {sustainabilityLeadership.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            Explore more about our company profile and business portfolio.
          </p>
          <Link
            href="/about"
            className="inline-flex rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Back to Company
          </Link>
        </div>
      </section>
    </>
  );
}
