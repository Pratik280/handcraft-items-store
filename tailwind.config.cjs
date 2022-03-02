module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-darker": "hsla(215, 25%, 23%, 1)",
        "clr-dark": "hsla(215, 25%, 27%, 1)",
        "clr-accent": "hsla(176, 100%, 39%, 1)",
        "clr-light": "hsla(48, 100%, 92%, 1)",
      },
    },
  },
};
