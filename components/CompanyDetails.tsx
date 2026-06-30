import Image from "next/image";
import Link from "next/link";
import {
  companyHighlights,
  businessUnits,
  companyHistory,
  coreValues,
  companyFacts,
  visionMission,
} from "@/data/company";
import { SectionHeading } from "@/components/ui";

export function CompanyFactsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {companyFacts.map((fact) => (
        <div
          key={fact.label}
          className="rounded-xl border border-border bg-white p-4 text-center shadow-sm"
        >
          <p className="text-lg font-bold text-primary">{fact.value}</p>
          <p className="mt-1 text-xs text-muted">{fact.label}</p>
        </div>
      ))}
    </div>
  );
}

export function CompanyHighlightsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {companyHighlights.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group relative min-h-[220px] overflow-hidden rounded-xl sm:min-h-[260px]"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {item.title}
              <span className="ml-1 text-white/70">+</span>
            </h3>
            <p className="mt-2 text-sm text-white/80">{item.subtitle}</p>
            <p className="mt-3 max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function BusinessPortfolio() {
  return (
    <section className="relative overflow-hidden py-20">
      <Image
        src="/s-oil.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/90" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          label="Business"
          title="Balanced Business Portfolio"
          description="We pursue higher efficiency through a balanced business portfolio."
          light
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessUnits.map((unit) => (
            <div
              key={unit.name}
              className="group relative min-h-[320px] overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={unit.image}
                alt={unit.name}
                fill
                className="object-cover opacity-40 transition-opacity group-hover:opacity-50"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div>
                  <p className="text-xs text-white/70 leading-snug">{unit.metricLabel}</p>
                  <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {unit.capacity}
                    <span className="ml-1 text-base font-semibold text-accent">
                      {unit.unit}
                    </span>
                  </p>
                  {unit.subMetrics && (
                    <div className="mt-2 space-y-0.5 text-xs text-white/60">
                      {unit.subMetrics.map((sub) => (
                        <p key={sub}>{sub}</p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm font-semibold text-white">{unit.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisionMissionCards() {
  return (
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
  );
}

export function CoreValuesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {coreValues.map((value) => (
        <div
          key={value.title}
          className="rounded-xl border border-border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-bold text-primary">{value.title}</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">{value.description}</p>
        </div>
      ))}
    </div>
  );
}

export function CompanyHistoryTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-1/2" />
      <div className="space-y-10">
        {companyHistory.map((event, index) => (
          <div
            key={event.year}
            className={`relative flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <div className="hidden sm:block sm:w-1/2" />
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white z-10">
              {event.year.slice(2)}
            </div>
            <div className={`sm:w-1/2 pl-12 sm:pl-0 ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
              <span className="text-sm font-semibold text-accent">{event.year}</span>
              <h3 className="mt-1 text-lg font-bold text-foreground">{event.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CompanyPreviewSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          label="Company"
          title="A Trusted Energy & Lubricants Leader"
          description={visionMission.vision}
        />
        <CompanyHighlightsGrid />
        <div className="mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
