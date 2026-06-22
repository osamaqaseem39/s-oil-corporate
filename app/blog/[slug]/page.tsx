import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company } from "@/data/company";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { PageHero } from "@/components/ui";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const categoryLabels: Record<string, string> = {
  "engine-tips": "Engine Tips",
  maintenance: "Maintenance",
  industry: "Industry",
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        breadcrumb={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex items-center gap-4 text-sm text-muted mb-8 pb-8 border-b border-border">
            <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary">
              {categoryLabels[post.category]}
            </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-muted leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted">
              Published by{" "}
              <span className="font-medium text-foreground">{company.name}</span>
            </p>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
