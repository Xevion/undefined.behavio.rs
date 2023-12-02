import { type CollectionEntry } from "astro:content";

export function shouldShowPost(post: CollectionEntry<"blog">) {
    return import.meta.env.DEV || !post.data.draft;
}