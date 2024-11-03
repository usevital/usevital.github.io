/** @type {import('prettier').Config} */
export default {
  printWidth: 120,
  bracketSameLine: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
  semi: false,
  useTabs: false,
  tabWidth: 2,
}
