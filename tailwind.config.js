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
        p: ["18px", "28px"],
        plan: ["56px", "64px"],
        button: ["16px", "28px"],
        ["h1-lg"]: ["56px", "64px"],
      
      },
    },
  },
  plugins: [],
};
