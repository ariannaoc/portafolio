/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  "darkMode": "class",
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#ffffff",
	  bunker: {
        '50': '#f7f7f8',
        '100': '#eeeef0',
        '200': '#d9d9de',
        '300': '#b8b9c1',
        '400': '#91939f',
        '500': '#737584',
        '600': '#5d5e6c',
        '700': '#4c4d58',
        '800': '#41414b',
        '900': '#393941',
        '950': '#18181b',
    },
      jade: {
        50: "#f4f9f8",
        100: "#dbece7",
        200: "#b8d7ce",
        300: "#8cbcb0",
        400: "#649d91",
        500: "#43766c",
        600: "#396860",
        700: "#31544e",
        800: "#2a4541",
        900: "#263b37",
        950: "#122120",
      },
    },
  },
  plugins: [],
};
