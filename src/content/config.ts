import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()),
    preview_image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};