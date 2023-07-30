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

const bookNotesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string().default(''),
        author: z.string(),
        date_published: z.date(),
        draft: z.boolean().default(false),
    }),
})

export const collections = {
    posts: postsCollection,
    bookNotes: bookNotesCollection,
}
