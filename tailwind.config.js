/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        sage: {
          50: '#F4F7F5',
          100: '#E5EDE8',
          200: '#CADBD1',
          300: '#A4C0B1',
          400: '#7B9F8D',
          500: '#517B65', // Primary Muted Sage Green
          600: '#426553',
          700: '#345042',
          800: '#283E34',
          900: '#1C2E26',
        },
        ivory: {
          DEFAULT: '#F3F0E9', // Main Background
          light: '#FBF9F6',
          dark: '#E8E4DA',
        },
        beige: {
          DEFAULT: '#E7E0D0', // Secondary Background
          light: '#EFEAE0',
          dark: '#D8CFBC',
        },
        taupe: {
          DEFAULT: '#AB9B81', // Accent Warm Taupe
          light: '#BFB29C',
          dark: '#8D7D64',
        },
        botanical: {
          DEFAULT: '#1E382B', // Deep Botanical Green
          deep: '#14271E',
          soft: '#2A4D3C',
        },
        charcoal: {
          DEFAULT: '#242825', // Soft Charcoal for text
          muted: '#585F58',
          light: '#7F877F',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.2em',
        'loose-luxury': '0.3em',
      }
    },
  },
  plugins: [],
}
