"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Product, ProductCategory } from "@/data/products";
import { SectionHeading } from "@/components/ui";
import { CategoryCard, ProductCard } from "@/components/Cards";

type CategoryInfo = {
  slug: ProductCategory;
  name: string;
  description: string;
  image: string;
};

interface ProductsExplorerProps {
  categories: CategoryInfo[];
  products: Product[];
}

function isValidCategory(
  value: string | null,
  categories: CategoryInfo[]
): value is ProductCategory {
  return !!value && categories.some((cat) => cat.slug === value);
}

export default function ProductsExplorer({
  categories,
  products,
}: ProductsExplorerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramCategory = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(
    () => (isValidCategory(paramCategory, categories) ? paramCategory : null)
  );

  const activeCatInfo = activeCategory
    ? categories.find((c) => c.slug === activeCategory)
    : null;

  const filteredProducts = useMemo(
    () =>
      activeCategory
        ? products.filter((product) => product.category === activeCategory)
        : products,
    [activeCategory, products]
  );

  const selectCategory = (slug: ProductCategory | null) => {
    setActiveCategory(slug);
    const url = slug ? `/products?category=${slug}` : "/products";
    router.replace(url, { scroll: false });
  };

  const pillClass = (active: boolean) =>
    `rounded-full px-5 py-2 text-sm font-medium transition-colors ${
      active
        ? "bg-primary text-white"
        : "bg-white text-muted border border-border hover:border-primary hover:text-primary"
    }`;

  return (
    <>
      <section className="py-12 border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => selectCategory(null)}
              className={pillClass(!activeCategory)}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => selectCategory(cat.slug)}
                className={pillClass(activeCategory === cat.slug)}
              >
                {cat.name}
              </button>
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
                <CategoryCard
                  key={cat.slug}
                  {...cat}
                  onSelect={(slug) => selectCategory(slug)}
                />
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
