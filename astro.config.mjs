import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import vercel from '@astrojs/vercel/serverless'
import { SITE_URL } from './src/data/config'
import theme from './shiki.json'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import remarkCapitalize from 'remark-capitalize'
import remarkGfm from 'remark-gfm'
import remarkReadingTime from './src/utils/readingTime.mjs'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		sitemap(),
		react(),
		mdx({
			drafts: true,
		}),
		partytown(),
	],
	site: SITE_URL,
	markdown: {
		drafts: true,
		remarkPlugins: [remarkCapitalize, remarkGfm, remarkReadingTime],
		rehypePlugins: [rehypeHeadingIds],
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: theme,
			wrap: false,
		},
	},
	output: 'server',
	adapter: vercel(),
})
