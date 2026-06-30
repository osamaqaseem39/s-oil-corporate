import Link from "next/link";
import { company, whyChooseUs, keyStats } from "@/data/company";
import { categories } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { SectionHeading, CTABanner } from "@/components/ui";
import { CategoryCard, FeatureCard, BlogCard } from "@/components/Cards";
import HeroVideo from "@/components/HeroVideo";
import WelcomeSection from "@/components/WelcomeSection";
import { CompanyPreviewSection } from "@/components/CompanyDetails";

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroVideo />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-24 sm:pt-28 sm:pb-32">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-teal mb-4">
              Pakistan&apos;s Trusted Lubricants Brand
            </span>
            <div className="w-12 h-px bg-teal/60 mb-6" />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
              {company.tagline}
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              {company.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg"
              >
                Find Your Product
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href={company.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary hover:bg-accent-dark transition-colors"
              >
                Shop Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <WelcomeSection />

      {/* Product Categories */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Our Products"
            title="Complete Lubricant Solutions"
            description="From passenger cars to heavy commercial fleets and industrial machinery — we have the right oil for every application."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} {...cat} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex rounded-lg bg-secondary px-8 py-3 text-sm font-semibold text-white hover:bg-secondary-dark transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <CompanyPreviewSection />

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Why Choose Us"
            title="Engineered for Excellence"
            description="Our advanced formulations deliver measurable benefits — from fuel savings to extended engine life."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/technology"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Learn about our technology
              <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-secondary-dark">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
            {keyStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-accent">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Blog & Media"
            title="Engine Tips & Insights"
            description="Expert advice on engine maintenance, product selection, and industry trends."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View all articles
              <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Partner With Us?"
        description="Join our growing network of distributors and bring premium lubricants to your market."
        primaryLabel="Become a Distributor"
        primaryHref="/partners"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />
    </>
  );
}
