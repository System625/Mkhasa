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

module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      // montserrat: ["Montserrat", "sans-serif"],
      helvetica: ["Helvetica", "sans-serif"],
      // nimbusSan: ["NimbusSan", "sans-serif"],
      fuzzy: ["Fuzzy Bubbles", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "app-red": "#A40001",
        "app-ash": "#F5F5F5",
        "app-ash-1": "#EAEAEA",
        "app-ash-2": "#A0A0A0",
        "app-slate": "#B6B6B6",
        "app-black": "#171717",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        swift: "linear-gradient(100deg, #A40001, #3E0000 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        cont1300: "calc((100% - 1300px) / 2 )",
      },
    },
  },
  plugins: [containerPlugin, require("tailwindcss-animate")],
}
