/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        pulseShadow: "pulseShadow 2s infinite",
      },
      keyframes: {
        pulseShadow: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 15px 10px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  },
  plugins: [],
};
