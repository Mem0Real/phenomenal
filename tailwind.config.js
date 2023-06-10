/** @type {import('tailwindcss').Config} */
module.exports = {
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
      animation: {
        move: "move 3s ease infinite alternate",
        move_home: "move_home 3s ease infinite alternate",
        go_forward: "go_forward 1s ease forwards",
        go_backward: "go_backward 1s ease forwards",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-15px) scale(1.03)" },
        },
        move_home: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-10px)" },
        },
        go_forward: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(30px)" },
        },
        go_backward: {
          "0%": { transform: "translateX(35px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [require("autoprefixer"), require("tailwindcss")],
};
