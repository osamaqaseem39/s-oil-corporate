import type { Metadata } from "next";
import { company } from "@/data/company";
import { blogPosts } from "@/data/blog";
import { PageHero, SectionHeading } from "@/components/ui";
import { BlogCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Blog & Media",
  description: `Engine tips, maintenance guides, and industry insights from ${company.name}.`,
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog & Media"
        subtitle="Expert advice on engine care, product selection, and industry trends."
        breadcrumb={[{ label: "Blog" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            label="Latest Articles"
            title="Engine Tips & Insights"
            description="Stay informed with our latest articles on lubricants, maintenance, and fleet management."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
