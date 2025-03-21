/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html',
           './src/**/*.{js,ts,jsx,tsx}'
          ],
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform',
      },
      transformOrigin: {
        'top': 'top',
      },
    },
  },
  plugins: [],
};