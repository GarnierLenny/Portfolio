import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'white': '#fdfffc',
        'black': '#011627',
        'light-back': '#022847',
        'lighter-black': '#033965',
        'red': '#e71d36',
        'light-red': '#ed5164',
        'blue': '#2ec4b6',
        'glaucous': '#5C80BC',
        'grayish': '#A188A6',
        'ruddy-blue': '#136F63',
        'ruddy-blue-darker': '#0e534a',
        'ruddy-blue-darker-darker': '#0c4941',
      },
      fontSize: {
        '4xs': '0.45rem',
        '3xs': '0.55rem',
        'xxs': '0.65rem',
      },
      animation: {
        'slide-down': 'slide_down 0.5s cubic-bezier(.25,.46,.45,.94)',
        'slide-up': 'slide_up 0.5s cubic-bezier(.25,.46,.45,.94)',
        'slide-left': 'slide_left 0.5s cubic-bezier(.25,.46,.45,.94)',
        'slide-right': 'slide_right 0.5s cubic-bezier(.25,.46,.45,.94)',
        'wave-hand': 'wave 1.5s cubic-bezier(.25,.46,.45,.94) infinite',
        'scale-up': 'scale_up .5s cubic-bezier(.25,.46,.45,.94)'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        slide_down: {
          '0%': { transform: 'translate(0px, -50px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        slide_up: {
          '0%': { transform: 'translate(0px, 50px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        slide_left: {
          '0%': { transform: 'translate(-50px, 0px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        slide_right: {
          '0%': { transform: 'translate(50px, 0px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        scale_up: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
