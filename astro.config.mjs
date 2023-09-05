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
import markdoc from '@astrojs/markdoc'

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	integrations: [
		tailwind(),
		sitemap(),
		react(),
		mdx({
			drafts: true,
		}),
		partytown(),
		markdoc(),
	],
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
	site: SITE_URL,
})
