import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {
      boxShadow: {
        'card-head': '0 8px 6px 0px rgba(0, 0, 0, 0.25)',
        card: '-4px 4px 8px 4px rgba(0, 0, 0, 0.65)',
        'card-md': '-2px 2px 4px 2px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        xxs: '370px', // smaller than 'xs'
        xs: '480px', // smaller than 'sm'
        'sm-md': '700px', // smaller than 'md'
        'md-lg': '900px', // smaller than 'lg'
        'lg-xl': '1152px', // smaller than 'xl'
      },
    },
  },
  plugins: [],
};
