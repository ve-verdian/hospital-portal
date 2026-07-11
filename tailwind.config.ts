import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FBF8FC',
        surface: '#FFFFFF',
        'surface-hover': '#FDF3F8',
        line: '#E9E1EE',
        ink: '#241B2E',
        muted: '#7A7189',
        brawijaya: {
          pink: '#B93074',
          purple: '#6A3FA0',
        },
        signal: {
          online: '#16A34A',
          maintenance: '#D97706',
          offline: '#9CA3AF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(36,27,46,0.05), 0 10px 24px -14px rgba(106,63,160,0.28)',
      },
      backgroundImage: {
        'brawijaya-gradient': 'linear-gradient(115deg, #B93074 0%, #99388B 45%, #6A3FA0 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
