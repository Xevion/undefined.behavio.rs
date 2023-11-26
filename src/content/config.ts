import { z, defineCollection } from 'astro:content';
import { parse } from 'date-fns';

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((date) => 
      z.date().parse(
        parse(date, 'yyyy-MM-dd HH:mm:ss XXXX', new Date())
      )
    ),
    tags: z.array(z.string()),
    preview_image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};