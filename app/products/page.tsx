import type { Metadata } from "next";
import { Suspense } from "react";
import { company } from "@/data/company";
import { categories, products } from "@/data/products";
import { PageHero } from "@/components/ui";
import ProductsExplorer from "@/components/ProductsExplorer";

export const metadata: Metadata = {
  title: "Products",
  description: `Explore ${company.name}'s complete range of motor oils and lubricants for passenger cars, motorcycles, commercial vehicles, and industrial applications.`,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Premium lubricants for every engine, every industry, every application."
        breadcrumb={[{ label: "Products" }]}
        image="/new/A_professional_studio_product_shot_202606301452.jpeg"
        size="large"
        overlay="subtle"
      />

      <Suspense
        fallback={
          <div className="py-20 text-center text-muted">Loading products...</div>
        }
      >
        <ProductsExplorer categories={categories} products={products} />
      </Suspense>
    </>
  );
}
