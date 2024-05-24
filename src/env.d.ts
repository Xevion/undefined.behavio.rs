/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_VERCEL_GIT_REPO_OWNER: string;
    readonly PUBLIC_VERCEL_GIT_REPO_SLUG: string;
    readonly PUBLIC_VERCEL_GIT_COMMIT_SHA: string;
}
  
interface ImportMeta {
readonly env: ImportMetaEnv;
}