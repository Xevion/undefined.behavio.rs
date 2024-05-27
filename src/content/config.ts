import { z, defineCollection } from "astro:content";
import { parse } from "date-fns";
// import { zonedTimeToUtc } from "date-fns-tz";

const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
    pubDate: z.string().transform((date) => {
      // I am truly lost on how TZ works in Javascript Dates.
      // I believe somehow the solution would lie here in making sure that the date offset is parsed and transmitted properly,
      // but there is no insight in how this works so far. I'm lost as fuck.
      
      // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const parsed = parse(date, "yyyy-MM-dd HH:mm:ss XX", new Date());
      // const utc = zonedTimeToUtc(parsed, timezone);
      return z.date().parse(parsed);
    }),
    tags: z.array(z.string()),
    preview_image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
