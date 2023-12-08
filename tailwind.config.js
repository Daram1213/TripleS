/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,css}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg':
          'url(https://ak-d.tripcdn.com/images/05E3s12000cmarxu50A1C.webp)',
        'hotel-bg':
          'url(https://pages.trip.com/Hotels/images/V8HomePageBackGround.webp)',
      },
      borderRadius: {
        lg: '4rem',
      },
      width: {
        '-webkit': '-webkit-fill-available',
      },
      height: {
        '-webkit': '-webkit-fill-available',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
