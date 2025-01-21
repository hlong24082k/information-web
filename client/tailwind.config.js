/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('assets/Banner.png')",
        'bgcsbh': "url('assets/bg-csbh.png')",
        'bgchtg': "url('assets/content-chtg.png')",
        'imgcard': "url('assets/imgcard.jpeg')"
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar"),
  ],
};