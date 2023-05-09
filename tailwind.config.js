/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    // screens: {
    //   ch: { min: '560px' },
    //   chx: { max: '560px' },
    //   mdn: { min: '768px' },
    //   mdx: { max: '768px' },
    //   lgn: { min: '960px' },
    //   lgx: { max: '960px' }
    // },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#f88633',
        secondary: '#C3C3C3'
      }
    }
  },
  plugins: []
}
