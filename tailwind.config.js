/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Warm sunrise gradients
        peach: {
          50: '#FFF5F0',
          100: '#FFE8DC',
          200: '#FFD1B9',
          300: '#FFB896',
          400: '#FF9D73',
          500: '#FF8250',
          600: '#FF672D',
 700: '#E64D0A',
          800: '#B33800',
          900: '#802600',
        },
        coral: {
          50: '#FFF1EE',
          100: '#FFE0DA',
          200: '#FFC1B5',
          300: '#FFA290',
          400: '#FF836B',
          500: '#FF6446',
          600: '#FF4521',
          700: '#E62700',
          800: '#AD1D00',
          900: '#751300',
        },
        teal: {
          50: '#EFFCF8',
          100: '#D6F6ED',
          200: '#ADE0DB',
          300: '#7DD9D0',
          400: '#4DC2BA',
          500: '#2AA79F',
          600: '#1A8F87',
          700: '#0F7871',
          800: '#086159',
          900: '#044A42',
        },
        gold: {
          50: '#FFFBEB',
          100: '#FFF3C7',
          200: '#FFE68A',
          300: '#FFD84D',
          400: '#FFCA10',
          500: '#F5B800',
          600: '#D19600',
          700: '#A57500',
          800: '#785600',
          900: '#4C3700',
        },
        // Semantic mood colors
        mood: {
          happy: '#FFD84D',
          sad: '#7DD9D0',
          anxious: '#FFB896',
          calm: '#4DC2BA',
          energetic: '#FF8250',
          peaceful: '#ADE0DB',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'float': '0 8px 24px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
