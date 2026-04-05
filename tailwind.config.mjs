/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark palette
        'd-bg':     '#111F35',
        'd-wine':   '#8A244B',
        'd-red':    '#D02752',
        'd-bright': '#F63049',
        // Light palette
        'l-bg':     '#EFECE3',
        'l-steel':  '#8FABD4',
        'l-blue':   '#4A70A9',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Epilogue', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      animation: {
        'glitch':      'glitch 0.4s steps(2) infinite',
        'fadeUp':      'fadeUp 0.7s ease forwards',
        'scanline':    'scanline 4s linear infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        glitch: {
          '0%':   { clipPath: 'inset(0 0 95% 0)', transform: 'translateX(-4px)' },
          '25%':  { clipPath: 'inset(40% 0 40% 0)', transform: 'translateX(4px)' },
          '50%':  { clipPath: 'inset(70% 0 10% 0)', transform: 'translateX(-2px)' },
          '75%':  { clipPath: 'inset(20% 0 60% 0)', transform: 'translateX(2px)' },
          '100%': { clipPath: 'inset(95% 0 0 0)', transform: 'translateX(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
