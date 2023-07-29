import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date_published: z.date(),
        excerpt: z.string(),
        draft: z.boolean().default(false),
    }),
})

export const collections = { posts: postsCollection }
