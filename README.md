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
