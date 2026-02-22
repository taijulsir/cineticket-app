import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "xs": "360px",
        'xl2': '1500px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      screens: {
        xs: "360px",
        '1024px': '1024px',
      },
      height: {
        'calc-82vh-minus-90': 'calc(82vh - 90px)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0b0b0f",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: '#E7AD04',
          foreground: '#000000',
        },
        secondary: '#FFFFFF',
        tersiary: '#75e200',
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
          DEFAULT: "#1a1a1e",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "2rem",
        md: "1.5rem",
        sm: "1rem",
      },
      boxShadow: {
        'soft': '0 20px 50px -12px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 30px rgba(231,173,4,0.15)',
        'btnHover': '0 10px 25px -5px rgba(231,173,4,0.4)',
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
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config;