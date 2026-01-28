/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0a0a0f',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        purple: {
          500: '#a855f7',
          600: '#9333ea',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'monospace'],
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
        'blink': 'blink 1s steps(2, start) infinite',
        'glitch': 'glitch 3s infinite', // Uses the new SAFE animation
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'gradient': 'gradient 3s ease infinite',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#22d3ee' },
        },
        // --- NEW SAFE GLITCH (No Cutting) ---
        glitch: {
          '0%, 100%': { 
            transform: 'translate(0)',
            textShadow: 'none',
          },
          '5%': { 
            transform: 'translate(-2px, 2px)',
            textShadow: '2px 0 #ff00c1, -2px 0 #00fff9', // Red & Blue split
          },
          '10%': { 
            transform: 'translate(2px, -2px)',
            textShadow: '-2px 0 #ff00c1, 2px 0 #00fff9',
          },
          '15%': { 
            transform: 'translate(0)',
            textShadow: 'none',
          },
          '50%': {
             transform: 'translate(2px, 0)',
             textShadow: '-2px 0 #ff00c1',
          },
          '55%': {
             transform: 'translate(0)',
             textShadow: 'none',
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)',
          },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cyber': 'linear-gradient(90deg, #22d3ee 0%, #a855f7 50%, #22d3ee 100%)',
        'gradient-diagonal': 'linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)',
      },
    },
  },
  plugins: [],
}