/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush:    '#ffd7e0',
        ivory:    '#fdecec',
        rose:     '#ffa4c4',
        roseDeep: '#f07ca0',
        cream:    '#fff8f8',
        mink:     '#c49aab',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans:    ['"DM Sans"', 'Inter', 'sans-serif'],
        script:  ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'rose-gradient':  'linear-gradient(135deg, #ffd7e0 0%, #ffa4c4 100%)',
        'hero-gradient':  'linear-gradient(to right, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.20) 60%, transparent 100%)',
        'card-shimmer':   'linear-gradient(135deg, rgba(255,215,224,0.12) 0%, transparent 60%)',
        'footer-bg':      'linear-gradient(135deg, #1a0a10 0%, #2d1020 100%)',
      },
      boxShadow: {
        'rose':      '0 4px 32px 0 rgba(255,164,196,0.22)',
        'rose-lg':   '0 8px 56px 0 rgba(255,164,196,0.32)',
        'card':      '0 4px 32px 0 rgba(180,100,140,0.10)',
        'card-lg':   '0 12px 48px 0 rgba(180,100,140,0.18)',
        'soft':      '0 2px 16px 0 rgba(200,100,140,0.08)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'  },
          '50%':      { transform: 'translateY(-6px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1'   },
          '50%':      { opacity: '0.5' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.75s ease both',
        'shimmer':    'shimmer 3s linear infinite',
        'float':      'float 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
