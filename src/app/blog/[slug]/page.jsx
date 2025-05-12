import BlogLayout from "@/modules/blogModule/BlogLayout";
import { fetchAllBlogSlugs, fetchBlogBySlug } from "@/utils/fetcher";

export async function getStaticParams() {
  const paths = await fetchAllBlogSlugs();

  return paths.map((blog) => ({
    slug:blog.slug
  }))
}

// export async function getStaticProps({ params }) {
//   const blog = await fetchBlogBySlug(params.slug);

//   if (!blog) {
//     return { notFound: true };
//   }

//   return {
//     props: {
//       blog,
//     },
//     revalidate: 60,
//   };
// }

export default async function BlogPage({ params }) {
   const blog = await fetchBlogBySlug(params.slug);

  if (!blog) return <div>Loading...</div>;
  return <BlogLayout data={blog} />;
}
