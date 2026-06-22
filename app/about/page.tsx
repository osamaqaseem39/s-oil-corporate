import type { Metadata } from "next";
import Image from "next/image";
import {
  company,
  visionMission,
  certifications,
  presence,
} from "@/data/company";
import { PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name} — our vision, mission, global presence, and industry certifications.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Building trust through quality, innovation, and customer partnership since day one."
        breadcrumb={[{ label: "About Us" }]}
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
                With state-of-the-art blending facilities and a commitment to
                research and development, we manufacture lubricants that meet
                and exceed international standards. Our products are trusted by
                individual motorists, commercial fleet operators, and industrial
                clients across Pakistan and beyond.
              </p>
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
                  Premium Lubricants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-md border border-border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 text-muted leading-relaxed">{visionMission.vision}</p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-md border border-border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 text-muted leading-relaxed">{visionMission.mission}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
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

      <section className="py-20 bg-surface">
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
