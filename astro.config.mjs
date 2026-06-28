import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';
import rehypeMermaid from 'rehype-mermaid';

import vercel from '@astrojs/vercel';

const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

const mermaidStrategy = isProduction || isVercel ? 'pre-built' : 'inline-svg';

console.log(`Using Mermaid strategy: ${mermaidStrategy}`);

export default defineConfig({
  adapter: cloudflare(),
  site: 'https://theme-blog-1.da-oliveira-filho-03d.workers.dev',
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [
        [
          rehypeMermaid,
          {
            strategy:
              process.env.NODE_ENV === 'production'
                ? 'pre-mermaid'
                : 'inline-svg',
          },
        ],
      ],
      syntaxHighlight: {
        type: 'shiki',
        excludeLangs: ['mermaid'],
      },
    }),
  ],

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
