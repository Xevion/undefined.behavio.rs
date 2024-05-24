import { type CollectionEntry } from "astro:content";

type Predicate<T> = (value: T) => boolean;

export function shouldShowPost(post: CollectionEntry<"blog">): boolean {
    return import.meta.env.DEV || !post.data.draft;
}

export function hasTag(tag: string): Predicate<CollectionEntry<"blog">> {
    return (post) => post.data.tags.includes(tag)
}