import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'card-head': '0 8px 6px 0px rgba(0, 0, 0, 0.25)',
        card: '-4px 4px 8px 4px rgba(0, 0, 0, 0.8)',
        'card-md': '-2px 2px 4px 2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
