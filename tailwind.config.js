/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,css}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg':
          "url('https://pages.trip.com/images/home-background/head-banner-bg-new-1920.webp')",
      },
      borderRadius: {
        lg: '32px',
      },
      margin: {
        '-50px': '-50px',
        '-5px': '-5px',
      },
      width: {
        '1160px': '1160px',
        'calc(25%-12px)': 'calc(25%-12px)',
      },
    },
  },
  plugins: [],
}
