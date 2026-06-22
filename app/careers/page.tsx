import type { Metadata } from "next";
import Link from "next/link";
import { company, jobOpenings, csrInitiatives } from "@/data/company";
import { PageHero, SectionHeading } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Careers & Sustainability",
  description: `Join ${company.name} and explore our commitment to sustainability, CSR, and current job openings.`,
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers & Sustainability"
        subtitle="Build your career with us while making a positive impact on communities and the environment."
        breadcrumb={[{ label: "Careers" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Careers"
            title="Current Openings"
            description="Join a growing team passionate about quality, innovation, and customer success."
          />
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-white p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.049.327-.12.651-.213.964M6.75 8.25l8.25 4.5M6.75 8.25v8.25m0-8.25l8.25-4.5M6.75 8.25l-8.25 4.5" />
                      </svg>
                      {job.department}
                    </span>
                    <span>·</span>
                    <span>{job.type}</span>
                    <span>·</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <a
                  href="#apply"
                  className="shrink-0 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionHeading
                label="Apply"
                title="Submit Your Application"
                description="Interested in joining our team? Fill out the form below and attach your resume. We'll review your application and get back to you."
                align="left"
              />
              <p className="text-sm text-muted">
                Don&apos;t see a role that fits? Send us your CV at{" "}
                <a href={`mailto:${company.email}`} className="text-primary font-medium hover:underline">
                  {company.email}
                </a>
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-lg border border-border">
              <ContactForm type="career" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Sustainability & CSR"
            title="Our Commitment to a Better Future"
            description="We believe responsible business practices are essential to long-term success — for our company, our communities, and the planet."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {csrInitiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="rounded-xl bg-white p-8 shadow-md border border-border"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground">{initiative.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary-dark text-center">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-white">Learn More About Our Company</h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Discover our story, values, and the technology behind our products.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/technology"
              className="inline-flex rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Our Technology
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
