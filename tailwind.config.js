/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        focus: '0px 0px 20px 1px #00BFFF',
      },
    },
  },
  plugins: [],
};
