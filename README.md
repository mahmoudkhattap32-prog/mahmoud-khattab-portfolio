# Mahmoud Khattab portfolio

Plain HTML, CSS and JavaScript. No build step, no installs. Works as-is on Vercel.

## Where to edit

| To change | Edit |
|---|---|
| Name, intro, about text, education | `index.html` |
| Services, skills, tools, contact links | `js/content.js` (`services`, `skills`, `tools`, `contact`) |
| A project (One Bond, Caviaro, Valyrian, Meta Ads, reporting, designs, videos) | `js/content.js` |
| Certificates | `js/content.js` (`certificates`) |
| Colors and fonts | top of `css/styles.css` (`:root` variables) |

## Add a project image
1. Put the image in `assets/` (WebP or JPG, under 1600px wide).
2. Add a line in the matching list in `js/content.js`: `{ src, w, h, alt, cap }`.

## Add a certificate or video
Copy an existing entry in `certificates` or `videos` and change the file names. Videos: MP4 plus a JPG poster.

## Rules used on this site
Large campaign plans are labeled as capstone or concept projects. Numbers are shown as targets, not results. Screenshots are shown as they are.

## Deploy
Push the folder to Vercel (Hobby plan). `vercel.json` sets caching and security headers.
