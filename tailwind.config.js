/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        orange: {
          50: '#fff3f1',
          100: '#ffe5e0',
          200: '#ffd0c7',
          300: '#ffafa0',
          400: '#ff8169',
          500: '#f95738',
          600: '#e73c1b',
          700: '#c22f13',
          800: '#a02a14',
          900: '#852917',
          950: '#481107'
        },
        blue: {
          50: '#ecfaff',
          100: '#d5f2ff',
          200: '#b5e9ff',
          300: '#82deff',
          400: '#47c8ff',
          500: '#1daaff',
          600: '#058bff',
          700: '#0073f6',
          800: '#075cc6',
          900: '#0d4f9b',
          950: '#092140'
        }
      }
    }
  },
  plugins: []
}
