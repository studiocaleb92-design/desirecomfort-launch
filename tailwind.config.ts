import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["ModernEra", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        caption: ["var(--text-caption)", { lineHeight: "var(--leading-caption)" }],
        body: ["var(--text-body)", { lineHeight: "var(--leading-body)" }],
        subheading: ["var(--text-subheading)", { lineHeight: "var(--leading-subheading)" }],
        "heading-sm": ["var(--text-heading-sm)", { lineHeight: "var(--leading-heading-sm)" }],
        heading: ["var(--text-heading)", { lineHeight: "var(--leading-heading)" }],
        display: ["var(--text-display)", { lineHeight: "var(--leading-display)" }],
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        "warm-parchment": "var(--color-warm-parchment)",
        candlelight: "var(--color-candlelight)",
        obsidian: "var(--color-obsidian)",
        "walnut-shell": "var(--color-walnut-shell)",
        "aged-bronze": "var(--color-aged-bronze)",
        "amber-glow": "var(--color-amber-glow)",
        "muted-gold": "var(--color-muted-gold)",
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      spacing: {
        "40": "var(--spacing-40)",
        "100": "var(--spacing-100)",
        "120": "var(--spacing-120)",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        button: "var(--radius-buttons)",
        none: "0",
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
