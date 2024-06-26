/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        source: [`"Source Serif 4"`, "serif"],
        serif: [`"CMU Serif"`, "serif"],
        mono: [`"CMU Typewriter Text"`, "monospace"],
      }
    },
  },
  plugins: [],
};
