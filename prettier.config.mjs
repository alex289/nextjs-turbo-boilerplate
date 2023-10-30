/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  endOfLine: 'auto',
  bracketSameLine: true,
  singleQuote: true,
  bracketSpacing: true,
  semi: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: 'apps/web/tailwind.config.ts',
};

export default config;
