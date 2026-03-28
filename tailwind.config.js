/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#6f4e37',
        'brand-dark': '#050906',
        'brand-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'brand-large': '8px',
      },
      spacing: {
        'section-large': '112px',
        'page-global': '64px',
      },
      fontSize: {
        'heading-1': ['84px', '110%'],
        'text-medium': ['20px', '150%'],
        'text-regular': ['18px', '150%'],
      },
      keyframes: {
        navDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        logoPop: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        heroImage: {
          '0%': { opacity: '0', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        titleAnim: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        textFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        buttonUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        navDown: 'navDown 0.8s ease forwards',
        logoPop: 'logoPop 0.6s ease 0.4s forwards',
        heroImage: 'heroImage 1.5s forwards',
        titleAnim: 'titleAnim 1s 0.4s forwards',
        textFade: 'textFade 1s 0.8s forwards',
        buttonUp01: 'buttonUp 0.4s 1s forwards',
        buttonUp02: 'buttonUp 0.4s 1.2s forwards',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
