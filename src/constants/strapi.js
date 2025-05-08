export const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';


export const BLOG_POPULATE_TREE = {
    Content: {
        on: {
            'components.section': {
                populate: {
                    Media: true,
                },
            },
            'components.bullets': {
                populate: {
                    Icon: true,
                    bullet: {
                        populate: {
                            Icon: true,
                        },
                    },
                },
            },
            'components.carousel': {
                populate: {
                    Image: true,
                    Carousel: {
                        populate: {
                            Image: true,
                        },
                    },
                },
            },
            'components.socials': {
                populate: {
                    Icon: true,
                    Social: true,
                },
            },
        },
    },
};