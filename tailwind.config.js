/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        base: '#07080f',
        accent: { blue: '#5b8cff', violet: '#9b6bff' },
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translate3d(0,0,0)' }, '50%': { transform: 'translate3d(0,-28px,0)' } },
        blink: { '50%': { opacity: 0 } },
        pulseDot: { '0%': { boxShadow: '0 0 0 0 rgba(52,211,153,.6)' }, '100%': { boxShadow: '0 0 0 10px rgba(52,211,153,0)' } },
      },
      animation: { float: 'float 14s ease-in-out infinite', blink: 'blink 1s steps(1) infinite', pulseDot: 'pulseDot 2s infinite' },
    },
  },
  plugins: [],
}
