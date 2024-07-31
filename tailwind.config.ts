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
        'red': '#e71d36',
        'light-red': '#ed5164',
        'blue': '#2ec4b6',
        'glaucous': '#5C80BC',
      },
      fontSize: {
        '4xs': '0.45rem',
        '3xs': '0.55rem',
        'xxs': '0.65rem',
      },
    },
  },
  plugins: [],
};
export default config;
