# undefined.behavio.rs

## Project Structure

| Path                               | Description                                       |
| :--------------------------------- | :------------------------------------------------ |
| `/src/components`                  | Reusable building blocks                          |
| `/src/layouts `                    | Layouts are components used to structure the page |
| `/src/content/config.ts`           | Content collection definitions                    |
| `/src/content/blog`                | Stores blog posts                                 |
| `/src/pages/index.astro`           | Site Index                                        |
| `/src/pages/pages/[...slug].astro` | Catch all route that serves blog content          |
| `/public/fonts/`                   | Special font assets used in the site              |

## Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

Documentation is available [here](https://docs.astro.build).


## Required Environment Variables

This project requires certain environment variables to be present in order for builds to be successful.

To solve this, create a file named `.env` and place the following inside:


```
PUBLIC_VERCEL_GIT_REPO_OWNER=Xevion
PUBLIC_VERCEL_GIT_REPO_SLUG=undefined.behavio.rs
PUBLIC_VERCEL_GIT_COMMIT_SHA=ABC12345
```

These variables will be provided by Vercel upon build, so the `.env` file is only useful in development mode.