/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "#bfc7d2",
        primary: "#a87ffb",
        secondary: "#ffc26e",
        accent: "#25a6e9",
        bg: "#10151d",
      },
      dropShadow: {
        primarySh: "0 0 10px #a87ffbaa",
        secondarySh: "0 0 10px #ffc26eaa",
        accentSh: "0 0 10px #25a6e9aa",
      },
    },
  },
  plugins: [],
};
