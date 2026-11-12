/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F8F8F4',
          subtle: '#F2F3EE',
          surface: '#FFFFFF',
          border: '#E7E8E3',
          borderHover: '#D3D6CE',
        },
        charcoal: {
          900: '#17191D',
          800: '#2A2E35',
          700: '#424750',
          500: '#666B73',
          400: '#8A909A',
          200: '#D5D8DC',
          100: '#EAECEF',
        },
        cobalt: {
          DEFAULT: '#345BDB',
          hover: '#2747B8',
          light: '#EEF2FF',
          border: '#C7D4F9',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(23, 25, 29, 0.04), 0 1px 2px -1px rgba(23, 25, 29, 0.02)',
        'elevated': '0 4px 20px -2px rgba(23, 25, 29, 0.06), 0 2px 6px -1px rgba(23, 25, 29, 0.03)',
        'floating': '0 20px 40px -10px rgba(23, 25, 29, 0.08), 0 8px 16px -4px rgba(23, 25, 29, 0.04)',
      },
    },
  },
  plugins: [],
}

