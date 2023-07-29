import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE } from '@/data/site'

export async function get() {
    const allPosts = await getCollection('posts')
    const onlyPublished = allPosts.filter((post) => !post.data.draft)
    const sortedPosts = onlyPublished.sort(
        (a, b) =>
            new Date(b.data.date_published).valueOf() -
            new Date(a.data.date_published).valueOf()
    )
    return rss({
        title: SITE.title,
        description: SITE.description,
        site: SITE.website,
        items: sortedPosts.map((post) => ({
            link: `blog/${post.slug}`,
            title: post.data.title,
            description: post.data.excerpt,
            pubDate: new Date(post.data.date_published),
        })),
    })
}
