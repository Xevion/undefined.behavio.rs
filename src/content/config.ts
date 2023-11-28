import { z, defineCollection } from "astro:content";
import { parse } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((date) => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const parsed = parse(date, "yyyy-MM-dd HH:mm:ss XX", new Date());
      const utc = zonedTimeToUtc(parsed, timezone);
      return z.date().parse(utc);
    }),
    tags: z.array(z.string()),
    preview_image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
