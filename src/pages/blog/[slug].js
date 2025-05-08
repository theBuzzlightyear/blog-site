import BlogLayout from '@/modules/blogModule/BlogLayout';
import { fetchAllBlogSlugs, fetchBlogBySlug } from '@/utils/fetcher';

export async function getStaticPaths() {
    const paths = await fetchAllBlogSlugs();

    return {
        paths,
        fallback: false,
    };
}



export async function getStaticProps({ params }) {
    const blog = await fetchBlogBySlug(params.slug);

    if (!blog) {
        return { notFound: true };
    }

    return {
        props: {
            blog, 
        }
    };
}


export default function BlogPage({ blog }) {
    if (!blog) return <div>Loading...</div>;
    return <BlogLayout data={blog} />;
}
