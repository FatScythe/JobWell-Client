import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        primary: "#6b8afd",
        secondary: "#2e333d",
        dark: "#212328",
        "dark-blue": "#313B4B",
        danger: "#eb3330",
        success: "#4aac68",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 180s linear infinite",
        "pause-scroll": "infinite-scroll 180s linear infinite paused",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
    screens: {
      xs: "300px",
      sm: "640px",
      lg: "900px",
    },
  },
  plugins: [],
};
export default config;
