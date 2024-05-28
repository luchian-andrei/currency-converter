/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wp: "url('./wp.png')",
        topo: "url('./topo.png')",
      },
    },
  },
  plugins: [],
};
