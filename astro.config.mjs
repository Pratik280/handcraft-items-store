// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: [],
  buildOptions: {
    site: "https://pratik280.github.io/handcraft-items-store/",
    pageUrlFormat: "file",
    sitemap: true,
  },
});
