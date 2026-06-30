import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import {
  formatProductTitle,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/data/products";
import { ProductCard } from "@/components/Cards";

interface ProductDetailViewProps {
  product: Product;
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  const category = getCategoryBySlug(product.category);
  const title = formatProductTitle(product.name, product.viscosity);
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-border">/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <span className="text-border">/</span>
            <Link
              href={`/products?category=${product.category}`}
              className="hover:text-primary transition-colors"
            >
              {category?.name}
            </Link>
            <span className="text-border">/</span>
            <span className="text-foreground">{title}</span>
          </nav>
        </div>
      </div>

      {/* Main product */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[380px] lg:min-h-[520px]">
              <Image
                src={product.image}
                alt={title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Details */}
            <div className="lg:pt-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {category?.name}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Inline specs */}
              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="border-l-2 border-primary pl-4">
                    <dt className="text-xs font-medium text-muted">{spec.label}</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-foreground">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Benefits */}
              <div className="mt-10">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Key Benefits
                </h2>
                <ul className="mt-4 space-y-3">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
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

              {/* Actions */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={product.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Buy Now
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Ask an Expert
                </Link>
                <a
                  href={product.datasheetUrl}
                  className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Data Sheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold text-foreground">Recommended Usage</h2>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">{product.usage}</p>
          <a
            href={product.msdsUrl}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            Download MSDS
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </section>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Related Products
              </h2>
              <Link
                href={`/products?category=${product.category}`}
                className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => (
                <ProductCard key={related.slug} product={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Help strip */}
      <section className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-muted">
            Need help choosing the right oil?{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              Contact our technical team
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
