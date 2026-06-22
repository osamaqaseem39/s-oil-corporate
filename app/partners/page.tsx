import type { Metadata } from "next";
import { company, partnerBenefits } from "@/data/company";
import { PageHero, SectionHeading } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: `Become a ${company.name} distributor. Join our growing network and bring premium lubricants to your market.`,
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Partner With Us"
        subtitle="Join our distributor network and grow your business with a trusted lubricants brand."
        breadcrumb={[{ label: "Partners" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionHeading
                label="Distributor Program"
                title="Grow With SOIL"
                description="We are actively expanding our distribution network across Pakistan and international markets. Partner with us and benefit from a proven product portfolio, competitive margins, and dedicated support."
                align="left"
              />
              <ul className="space-y-4">
                {partnerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-primary mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Partnership Inquiry
              </h2>
              <ContactForm type="partner" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="How It Works"
            title="Simple Partnership Process"
          />
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Apply", desc: "Submit your partnership inquiry with business details" },
              { step: "02", title: "Review", desc: "Our team evaluates your market and distribution capacity" },
              { step: "03", title: "Onboard", desc: "Sign agreement, receive training and marketing materials" },
              { step: "04", title: "Launch", desc: "Start selling with ongoing support from our team" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
