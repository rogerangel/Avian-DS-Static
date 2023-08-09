/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // or 'media' or 'class'
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
        "avianDS-orange": "rgb(254, 144, 76)",
        "avianDS-blue": "rgb(54, 181, 254)",
        "avianDS-indigo": "rgb(80, 112, 254)",
        "avianDS-blue-logo": "rgb(26, 92, 153)",
      },
    },
  },
  plugins: [],
};
