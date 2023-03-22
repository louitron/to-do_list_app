/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "button-gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
      },
      keyframes: {
        disco: {
          "0%": { transform: "translateY(-50%) rotate(0deg)" },
          "100%": { transform: "translateY(-50%) rotate(360deg)" },
        },
        rotate: {
          "0%": {
            "--rotate": "0deg",
          },
          "100%": {
            "--rotate": "360deg",
          },
        },
        torch: {
          from: {
            backgroundPosition: "-100% 0",
          },
          to: {
            backgroundPosition: "200% 0",
          },
        },
      },
      width: {
        cardw: "325px",
      },
      height: {
        cardh: "500px",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
        disco: "disco 1.5s linear infinite",
        rotate: "rotate 6s linear infinite",
      },
    },
  },
  plugins: [],
};
