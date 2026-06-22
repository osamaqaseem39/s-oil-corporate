import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company } from "@/data/company";
import { products, getProductBySlug, getCategoryBySlug } from "@/data/products";
import { PageHero } from "@/components/ui";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} ${product.viscosity}`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);

  return (
    <>
      <PageHero
        title={`${product.name} ${product.viscosity}`}
        subtitle={product.shortDescription}
        breadcrumb={[
          { label: "Products", href: "/products" },
          {
            label: category?.name || "Product",
            href: `/products?category=${product.category}`,
          },
          { label: `${product.name} ${product.viscosity}` },
        ]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative rounded-2xl overflow-hidden bg-surface h-80 lg:h-[28rem]">
              <Image
                src={product.image}
                alt={`${product.name} ${product.viscosity}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Key Benefits</h2>
              <ul className="mt-4 space-y-3">
                {product.benefits.map((benefit) => (
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

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={product.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Buy Now
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-border px-8 py-3.5 text-base font-semibold text-foreground hover:bg-surface transition-colors"
                >
                  Ask an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-md border border-border">
              <h2 className="text-xl font-bold text-foreground">Technical Specifications</h2>
              <table className="mt-6 w-full text-sm">
                <tbody>
                  {product.specs.map((spec) => (
                    <tr key={spec.label} className="border-b border-border last:border-0">
                      <td className="py-3 font-medium text-foreground">{spec.label}</td>
                      <td className="py-3 text-muted text-right">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-md border border-border">
              <h2 className="text-xl font-bold text-foreground">Recommended Usage</h2>
              <p className="mt-4 text-muted leading-relaxed">{product.usage}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={product.datasheetUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white hover:bg-secondary-dark transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Product Data Sheet
                </a>
                <a
                  href={product.msdsUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  MSDS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary-dark">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-white/80">
            Need help choosing the right oil?{" "}
            <Link href="/contact" className="text-accent font-semibold hover:underline">
              Contact our technical team
            </Link>{" "}
            or browse{" "}
            <Link
              href={`/products?category=${product.category}`}
              className="text-accent font-semibold hover:underline"
            >
              more {category?.name}
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
