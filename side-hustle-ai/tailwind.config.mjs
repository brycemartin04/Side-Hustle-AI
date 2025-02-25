/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23C686", // Mountain Meadow // Green
        secondary: "#1D3853", // Cello  // Blue
        background: "#FBFCF6", // Loafer  // White
        surface: "#E5E7EB", // Cool Gray
        accent: "#099D02", // Emerald Green
        error: "#EF4444", // Coral Red
      },
    },
  },
  plugins: [],
};
