import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "royal-blue": {
          "50": "#ecf4ff",
          "100": "#ddeaff",
          "200": "#c2d8ff",
          "300": "#9dbeff",
          "400": "#7697ff",
          "500": "#5370fe",
          "600": "#3748f4",
          "700": "#2b38d7",
          "800": "#2530ae",
          "900": "#263189",
          "950": "#171c4f",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
