// import { getHighlighter, BUNDLED_LANGUAGES } from "shiki";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import rehypePrettyCode from "rehype-pretty-code";
import mdx from "@astrojs/mdx";

/** @type {import('rehype-pretty-code').Options} */
import react from "@astrojs/react";
const prettyOptions = {
  theme: "github-dark",
  keepBackground: false,
  tokensMap: {
    fn: "entity.name.function"
  }
  // getHighlighter: (options) => getHighlighter({
  //     ...options,
  //     langs: [
  //       ...BUNDLED_LANGUAGES,
  //       {
  //         id: "proc",
  //         scopeName: "source.groq",
  //         path: "../../../../../src/grammars/proc.json",
  //       },
  //     ],
  //   }),
};


// https://astro.build/config
export default defineConfig({
  site: "https://undefined.behavio.rs",
  prefetch: true,
  integrations: [tailwind(), sitemap(), robotsTxt(), mdx(), react()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyOptions]]
  }
});