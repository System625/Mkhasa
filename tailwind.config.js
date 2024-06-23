// /** @type {import('tailwindcss').Config} */
// import containerPlugin from '@tailwindcss/container-queries'
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     fontFamily: {
//       monteserrat: ["Monteserrat", "sans-serif"],
//       Helvetica:["Helvetica","sans-serif"],
//       NimbusSan:["NimbusSan","sans-serif"],
//       fuzzy: ["Fuzzy Bubbles", "sans-serif"],
//     },
//     extend: {
//       colors: {
//         "app-red": "#A40001",
//         "app-ash": "#F5F5F5",
//         "app-ash-1": "#EAEAEA",
//         "app-ash-2": "#A0A0A0",
//         "app-slate": "#B6B6B6",
//         "app-black": "#171717",
//       },
//       backgroundImage: {
//         swift: "linear-gradient(100deg, #A40001, #3E0000 100%)",
//       },
//       spacing: {
//         cont1300: "calc((100% - 1300px) / 2 )",
//       },
//     },
//   },
//   plugins: [containerPlugin],
// };
/** @type {import('tailwindcss').Config} */
import containerPlugin from '@tailwindcss/container-queries';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // montserrat: ["Montserrat", "sans-serif"],
      helvetica: ["Helvetica", "sans-serif"],
      // nimbusSan: ["NimbusSan", "sans-serif"],
      fuzzy: ["Fuzzy Bubbles", "sans-serif"],
    },
    extend: {
      colors: {
        "app-red": "#A40001",
        "app-ash": "#F5F5F5",
        "app-ash-1": "#EAEAEA",
        "app-ash-2": "#A0A0A0",
        "app-slate": "#B6B6B6",
        "app-black": "#171717",
      },
      backgroundImage: {
        swift: "linear-gradient(100deg, #A40001, #3E0000 100%)",
      },
      spacing: {
        cont1300: "calc((100% - 1300px) / 2 )",
      },
    },
  },
  plugins: [containerPlugin],
};
