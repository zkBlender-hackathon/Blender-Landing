import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4070E9",
        "primary-hover": "rgba(64,112,233, .1)",
        secondary: "#91E3FE",
        gray: "#E8E8E8",
        "strong-gray": "#F4F4F4",
        silver: "#C3C3C3",
      },
      margin: {
        23: "92px",
        25: "100px",
        27: "108px",
        51: "204px",
      },
      padding: {
        17: "68px",
        23: "92px",
        29: "116px",
        30: "120px",
      },
      fontSize: {
        base: ["16px", "24px"],
        md: ["24px", "27px"],
        "2md": ["26px", "32px"],
        lg: ["32px", "28px"],
        xlg: ["36px", "45px"],
        xl: ["46px", "50px"],
        "2xl": ["56px", "64px"],
      },
      screens: {
        ssm: "414px",
      },
    },
  },
  plugins: [],
};
export default config;
