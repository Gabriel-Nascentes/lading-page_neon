/* eslint-disable no-undef */
/* @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,css}", "./src/**/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
