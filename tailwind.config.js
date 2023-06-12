/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A5A692',
        secondary: '#F2A71B',
        third: '#011F26',
        fourth: '#FBFCFC',
        sub_text: '#c0c0c0',
        blue_ref: '#025E73'
      },
    },
  },
  plugins: [],
}
