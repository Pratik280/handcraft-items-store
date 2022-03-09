module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
    "./src/components/Navbar.astro",
  ],
  theme: {
    extend: {
      colors: {
        "clr-darker": "hsla(215, 25%, 23%, 1)",
        "clr-dark": "hsla(215, 25%, 27%, 1)",
        "clr-accent": "hsla(176, 100%, 39%, 1)",
        // "clr-light": "hsla(48, 100%, 92%, 1)",
        "clr-light": "#EAE1DF",
        "clr-primary-dark": "#917C78",
        // "clr-primary-accent": "#B79492",
        "clr-primary-accent": "#7a6662",
        "clr-secondary-dark": "#545E56",
        "clr-secondary-accent": "#667761",
      },
    },
  },
};
