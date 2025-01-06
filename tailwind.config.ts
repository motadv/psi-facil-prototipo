import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#284b63",
        foreground: "#f2ffd6",
        'psi-primary': "#861657",
        'psi-secondary': "#AA4465",
        'psi-tertiary': "#9381FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
