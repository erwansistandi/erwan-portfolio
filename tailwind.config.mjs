/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // <--- Inilah "saklar" yang akan memperbaiki dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}