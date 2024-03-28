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
        danger: "#eb3330",
        success: "#4aac68",
      },
    },
  },
  plugins: [],
};
export default config;
