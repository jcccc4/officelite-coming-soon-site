/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ["40px", "48px"],
        h2: ["20px", "28px"],
        h3: ["16px", "48px"],
        p: ["16px", "26px"],

        button: ["16px", "28px"],
        ["h1-lg"]: ["56px", "64px"],
        ["p-lg"]: ["18px", "28px"],
        time: ["32px", "48px"],
        timeName: ["12px", "28px"],
        "time-md": ["56px", "48px"],
        "timeName-md": ["16px", "28px"],
      },
      screens: {
        dsk: "1440px",
      },
    },
  },
  plugins: [],
};
