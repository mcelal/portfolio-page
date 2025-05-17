/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
        green: {
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151", // text-gray-700 for light mode
            "--tw-prose-headings": "#111827", // text-gray-900 for headings
            "--tw-prose-links": "#059669", // text-emerald-600 for links
            "--tw-prose-bold": "#111827", // text-gray-900 for bold
            "--tw-prose-counters": "#374151", // text-gray-700 for counters
            "--tw-prose-bullets": "#374151", // text-gray-700 for bullets
            "--tw-prose-quotes": "#374151", // text-gray-700 for quotes
            "--tw-prose-code": "#111827", // text-gray-900 for code
            "--tw-prose-pre-code": "#e5e7eb", // text-gray-200 for pre code
            "--tw-prose-pre-bg": "#1f2937", // bg-gray-800 for pre bg

            // Dark mode overrides
            ".dark &": {
              color: "#d1d5db", // text-gray-300 for dark mode
              "--tw-prose-headings": "#ffffff", // text-white for headings
              "--tw-prose-links": "#34d399", // text-emerald-400 for links
              "--tw-prose-bold": "#ffffff", // text-white for bold
              "--tw-prose-counters": "#d1d5db", // text-gray-300 for counters
              "--tw-prose-bullets": "#d1d5db", // text-gray-300 for bullets
              "--tw-prose-quotes": "#d1d5db", // text-gray-300 for quotes
              "--tw-prose-code": "#f3f4f6", // text-gray-100 for code
              "--tw-prose-pre-code": "#e5e7eb", // text-gray-200 for pre code
              "--tw-prose-pre-bg": "#1f2937", // bg-gray-800 for pre bg
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
