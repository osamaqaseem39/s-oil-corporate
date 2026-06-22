import type { Metadata } from "next";
import { company, technologyFeatures, whyChooseUs } from "@/data/company";
import { PageHero, SectionHeading, CTABanner } from "@/components/ui";
import { FeatureCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Technology",
  description: `Discover the advanced lubricant technology behind ${company.name} — engine protection, fuel efficiency, and proven performance.`,
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        title="Technology & Innovation"
        subtitle="Advanced formulations that protect engines, save fuel, and deliver measurable performance."
        breadcrumb={[{ label: "Technology" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Why Choose Us"
            title="Performance You Can Measure"
            description="Every SOIL product is engineered with a purpose — to deliver real-world benefits you can see and feel."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-dark text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Our Technology"
            title="Science Behind Every Drop"
            description="Proprietary additive technology developed through years of research and field testing."
            light
          />
          <div className="grid gap-8 md:grid-cols-2">
            {technologyFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className="flex gap-5 rounded-xl bg-white/5 border border-white/10 p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                title: "Engine Protection",
                stat: "50%",
                detail: "Reduction in engine wear at cold start compared to conventional oils",
              },
              {
                title: "Fuel Efficiency",
                stat: "3%",
                detail: "Average fuel economy improvement in real-world driving tests",
              },
              {
                title: "Extended Life",
                stat: "10,000 km",
                detail: "Maximum recommended drain interval for synthetic formulations",
              },
            ].map((claim) => (
              <div
                key={claim.title}
                className="text-center rounded-xl bg-surface p-8 border border-border"
              >
                <p className="text-5xl font-bold text-primary">{claim.stat}</p>
                <h3 className="mt-4 text-xl font-bold text-foreground">{claim.title}</h3>
                <p className="mt-2 text-sm text-muted">{claim.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Find the Right Product for Your Engine"
        description="Browse our complete product range or speak with our technical team for personalized recommendations."
        primaryLabel="View Products"
        primaryHref="/products"
        secondaryLabel="Contact Technical Support"
        secondaryHref="/contact"
      />
    </>
  );
}
