/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "generic-red": "#fa6f5a",
        "generic-orange": "#faa55a",
        "generic-yellow": "#fadd5a",
        "generic-green": "#9dfa5a",
        "generic-blue": "#5a95fa",
        "generic-purple": "#ba5afa",
        "generic-rose": "#fa5a87",

        "brand-colour": "#8e4ec6",

        "brand-purple-light": "#c084f6",
        "brand-purple": "#8e4ec6",
        "brand-purple-dark": "#3f1f5c",

        "brand-blue-light": "#7f82fa",
        "brand-blue": "#2f34fe",
        "brand-blue-dark": "#1e205b",

        "brand-green-light": "#33e1a5",
        "brand-green": "#01b477",
        "brand-green-dark": "#1e5b46",

        "brand-rose-light": "#f881a8",
        "brand-rose": "#e4306a",
        "brand-rose-dark": "#5b1e32",

        "logo-transparent-fill": "#fffffff5",

        "brand-background": "#0b0d0e",
        "brand-background-secondary": "#161b0d",
        "brand-border": "#21292c",
        "brand-text": "#ffffff",
        "brand-text-secondary": "#ebedf0",
      },
    },
  },
  plugins: [],
}
