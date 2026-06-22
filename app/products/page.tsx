import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import {
  categories,
  products,
  getProductsByCategory,
  type ProductCategory,
} from "@/data/products";
import { PageHero, SectionHeading } from "@/components/ui";
import { CategoryCard, ProductCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Products",
  description: `Explore ${company.name}'s complete range of motor oils and lubricants for passenger cars, motorcycles, commercial vehicles, and industrial applications.`,
};

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  const activeCategory = category as ProductCategory | undefined;
  const filteredProducts = activeCategory
    ? getProductsByCategory(activeCategory)
    : products;
  const activeCatInfo = activeCategory
    ? categories.find((c) => c.slug === activeCategory)
    : null;

  return (
    <>
      <PageHero
        title={activeCatInfo ? activeCatInfo.name : "Our Products"}
        subtitle={
          activeCatInfo
            ? activeCatInfo.description
            : "Premium lubricants for every engine, every industry, every application."
        }
        breadcrumb={[
          { label: "Products", href: "/products" },
          ...(activeCatInfo ? [{ label: activeCatInfo.name }] : []),
        ]}
      />

      <section className="py-12 border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                !activeCategory
                  ? "bg-primary text-white"
                  : "bg-white text-muted border border-border hover:border-primary hover:text-primary"
              }`}
            >
              All Products
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-primary text-white"
                    : "bg-white text-muted border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {!activeCategory && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading
              label="Categories"
              title="Browse by Category"
              description="Select a product category to find the right lubricant for your application."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat) => (
                <CategoryCard key={cat.slug} {...cat} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`py-20 ${!activeCategory ? "bg-surface" : ""}`}>
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label={activeCategory ? activeCatInfo?.name : "All Products"}
            title={`${filteredProducts.length} Product${filteredProducts.length !== 1 ? "s" : ""}`}
            align="left"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
