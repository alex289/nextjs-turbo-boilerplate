/** @type {import("prettier").Config} */
module.exports = {
  endOfLine: 'auto',
  bracketSameLine: true,
  singleQuote: true,
  parser: 'typescript',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindConfig: 'apps/web/tailwind.config.cjs',
};
