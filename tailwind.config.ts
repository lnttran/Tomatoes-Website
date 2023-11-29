import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tomatoes-bg': "url('/images/tomatoes-web.jpg')"
      },
      backgroundSize: {
        'custom-size': '100%', // Define your custom size here
      },
      fontFamily: {
        'logo': ['Dancing Script', 'cursive'],
        'serif4': ['Source Serif 4', 'serif'],
      }

      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
export default config
