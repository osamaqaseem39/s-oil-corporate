import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCompanyPage,
  getAllCompanyPageSlugs,
} from "@/data/companyPages";
import CompanyPageLayout from "@/components/CompanyPageLayout";

interface CompanySlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCompanyPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CompanySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCompanyPage(slug);
  if (!page) return { title: "Not Found" };
  return {
    title: page.title,
    description: page.tagline,
  };
}

export default async function CompanySlugPage({ params }: CompanySlugPageProps) {
  const { slug } = await params;
  const page = getCompanyPage(slug);
  if (!page) notFound();

  return <CompanyPageLayout page={page} />;
}
