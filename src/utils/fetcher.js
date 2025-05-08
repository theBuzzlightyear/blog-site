import { BLOG_POPULATE_TREE, STRAPI_API_URL } from '@/constants/strapi';
import qs from 'qs';

export async function fetchAllBlogSlugs() {
    const res = await fetch(`${STRAPI_API_URL}/api/blogs`);

    if (!res.ok) {
        throw new Error('Failed to fetch blog slugs');
    }

    const json = await res.json();

    return (
        json?.data
            ?.filter((b) => typeof b.Slug === 'string' && b.Slug.trim().length > 0)
            .map((b) => ({
                params: { slug: b.Slug },
            })) || []
    );
}





export async function fetchBlogBySlug(slug) {
    const query = qs.stringify(
        {
            filters: {
                Slug: {
                    $eq: slug,
                },
            },
            populate: BLOG_POPULATE_TREE,
        },
        { encodeValuesOnly: true }
    );

    const res = await fetch(`${STRAPI_API_URL}/api/blogs?${query}`);


    if (!res.ok) {
        throw new Error(`Failed to fetch blog with slug: ${slug}`);
    }

    const json = await res.json();

    return json?.data?.[0] || null;
}
