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
        "clr-light": "#EAE1DF",
        "clr-primary-dark": "#7a6662",
        "clr-primary-accent": "#6C5A56",
        "clr-secondary-dark": "#545E56",
        "clr-secondary-accent": "#667761",
      },
    },
  },
};
