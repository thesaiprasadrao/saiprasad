# saiprasad-site

Personal portfolio built with **Next.js 14** (App Router) + TypeScript.

## Quickstart

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Project structure

```
app/
  layout.tsx              ← root layout + metadata
  globals.css             ← CSS variables, fonts, base styles
  page.tsx                ← home page
  writing/
    page.tsx              ← list of all writing posts
    [slug]/page.tsx       ← individual post (placeholder, ready for MDX)

src/
  data/index.ts           ← ALL content lives here (projects, stack, wins, nav, writings)
  components/
    Intro.tsx             ← hero text + contact links
    Divider.tsx           ← <hr> separator
    SectionHeading.tsx    ← reusable muted mono heading
    Tags.tsx              ← [tag1] [tag2] display
    ProjectCard.tsx       ← single project row
    ProjectsSection.tsx   ← renders all projects
    StackSection.tsx      ← renders tech stack
    WinsSection.tsx       ← renders wins
    Footer.tsx            ← bottom nav (uses next/link for internal routes)
```

## Adding a project

Open `src/data/index.ts` and add to the `projects` array:

```ts
{
  name: "My Project",
  href: "https://github.com/you/project",
  desc: "What it does in one sentence.",
  tags: ["Next.js", "Postgres"],
  badge: null,        // e.g. "🏆" or null
  live: "https://...", // or null
}
```

## Adding a writing post

### Step 1 — Add metadata to data file

In `src/data/index.ts`, add to the `writings` array:

```ts
{
  slug: "my-post-title",
  title: "my post title",
  date: "2025-03-01",
  description: "one line summary.",
}
```

### Step 2 — Add MDX support (one-time setup)

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

Update `next.config.js`:

```js
const withMDX = require("@next/mdx")();
module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
});
```

### Step 3 — Create the post file

Create `content/writing/my-post-title.mdx`:

```mdx
# my post title

your content here...
```

Then update `app/writing/[slug]/page.tsx` to import and render the MDX file.

## Deployment

Deploy to Vercel with zero config — just push to GitHub and import the repo.
