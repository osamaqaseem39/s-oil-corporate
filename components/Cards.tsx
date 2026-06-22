import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product, ProductCategory } from "@/data/products";
import { getCategoryBySlug } from "@/data/products";

interface CategoryCardProps {
  slug: ProductCategory;
  name: string;
  description: string;
  image: string;
}

export function CategoryCard({ slug, name, description, image }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${slug}`}
      className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-border"
    >
      <div className="relative h-44 overflow-hidden bg-surface">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
          View Products
          <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.category);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-border"
    >
      <div className="relative h-48 overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={`${product.name} ${product.viscosity}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <span className="absolute top-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {category?.name.split(" ")[0]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
          {product.name} {product.viscosity}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
          View Details
          <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

const iconMap: Record<string, ReactNode> = {
  shield: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  fuel: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    </svg>
  ),
  performance: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  globe: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
};

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-light text-primary">
        {iconMap[icon]}
      </div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readTime,
}: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}) {
  const categoryLabels: Record<string, string> = {
    "engine-tips": "Engine Tips",
    maintenance: "Maintenance",
    industry: "Industry",
  };

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all border border-border"
    >
      <div className="h-44 bg-gradient-to-br from-secondary to-secondary-dark flex items-end p-6">
        <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
          {categoryLabels[category] || category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-muted mb-3">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{readTime}</span>
        </div>
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
          Read Article
          <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
