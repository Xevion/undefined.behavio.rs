// import { getHighlighter, BUNDLED_LANGUAGES } from "shiki";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import rehypePrettyCode from "rehype-pretty-code";
import mdx from "@astrojs/mdx";

/** @type {import('rehype-pretty-code').Options} */
import react from "@astrojs/react";
import env from "astro-env";

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
  integrations: [tailwind(), sitemap(), robotsTxt(), mdx(), react(), env({
    schema: z.object({
      PUBLIC_VERCEL_GIT_REPO_OWNER: z.string(),
      PUBLIC_VERCEL_GIT_REPO_SLUG: z.string(),
      PUBLIC_VERCEL_GIT_COMMIT_SHA: z.string(),
    }),
  })],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyOptions]]
  }
});