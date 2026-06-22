import Link from "next/link";
import Image from "next/image";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      {label && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-wider mb-2 ${
            light ? "text-teal" : "text-primary"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  external?: boolean;
}

export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  external,
}: CTABannerProps) {
  const PrimaryTag = external ? "a" : Link;
  const primaryProps = external
    ? { href: primaryHref, target: "_blank", rel: "noopener noreferrer" }
    : { href: primaryHref };

  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{description}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <PrimaryTag
            {...primaryProps}
            className="inline-flex rounded bg-accent px-8 py-3.5 text-base font-semibold text-primary hover:bg-accent-dark transition-colors"
          >
            {primaryLabel}
          </PrimaryTag>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex rounded border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <Image
        src="/s-oil.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-primary/65 to-primary/45" />
      <div className="relative mx-auto max-w-7xl px-4">
        {breadcrumb && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {item.href ? (
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
