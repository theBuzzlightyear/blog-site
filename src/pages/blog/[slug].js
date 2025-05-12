import BlogLayout from '@/modules/blogModule/BlogLayout';
import { fetchAllBlogSlugs, fetchBlogBySlug } from '@/utils/fetcher';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await fetchAllBlogSlugs();

  return slugs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({ params }) {
  const blog = await fetchBlogBySlug(params.slug);

  if (!blog) return notFound();

  return <BlogLayout data={blog} />;
}
