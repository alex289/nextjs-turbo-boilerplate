import { type Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    '../../packages/ui/**/*.tsx',
  ],
} satisfies Config;

export default config;
