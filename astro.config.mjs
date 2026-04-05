import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// IMPORTANT: Change 'portfolio' to your actual GitHub repo name
// If your repo is username.github.io (user page), set base: '/'
// If your repo is username.github.io/repo-name (project page), set base: '/repo-name'
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: '/portfolio', // <-- CHANGE THIS to your repo name
  site: 'https://yourusername.github.io', // <-- CHANGE THIS to your GitHub Pages URL
});
