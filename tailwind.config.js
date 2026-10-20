import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0b1120',
        light: '#f7fafc',
        'white': '#ffffff',
        'text-light': '#f7fafc',
        'primary': '#14b8a6',
        'primary-dark': '#0d9488',
        'secondary': '#38bdf8',
        'accent': '#5eead4',
        'surface': '#111827',
        // Warm accent for the human touches (handwritten notes, highlights)
        'warm': '#f6c177',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        hand: ['Caveat', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'blob': 'blob 14s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%' },
          '33%': { borderRadius: '58% 42% 38% 62% / 55% 37% 63% 45%' },
          '66%': { borderRadius: '37% 63% 51% 49% / 37% 58% 42% 63%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #14b8a6, 0 0 10px #14b8a6' },
          '100%': { boxShadow: '0 0 10px #14b8a6, 0 0 20px #14b8a6' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0b1120 0%, #111827 50%, #0b1120 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'text-gradient': 'linear-gradient(90deg, #14b8a6, #5eead4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 18px rgba(20, 184, 166, 0.35)',
        'glow-lg': '0 0 30px rgba(20, 184, 166, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 16px 48px rgba(20, 184, 166, 0.12)',
      },
    },
  },
  plugins: [],
};
