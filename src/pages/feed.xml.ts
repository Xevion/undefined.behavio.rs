// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Undefined Behaviors',
    description: 'A amateur\'s blog discussing programming, technology, and other things.',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    items: posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        categories: post.data.tags,
      // Generate a `url` from each post `slug`
      // This assumes all blog posts are rendered as `/blog/[slug]` routes
      // https://docs.astro.build/en/guides/content-collections/#generating-pages-from-content-collections
      link: `/posts/${post.slug}/`,
    })),
  });
}