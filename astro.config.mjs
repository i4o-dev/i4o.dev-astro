import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { SITE_URL } from './src/data/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import theme from './shiki.json'

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        sitemap(),
        react(),
        mdx({ drafts: true }),
        partytown(),
    ],
    site: SITE_URL,
    markdown: {
        drafts: true,
        syntaxHighlight: 'shiki',
        shikiConfig: {
            theme: theme,
            wrap: false,
        },
    },
})
