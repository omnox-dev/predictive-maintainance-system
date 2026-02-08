import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#13ec80",
                secondary: "#234836",
                "accent-blue": "#3b82f6",
                "background-light": "#f6f8f7",
                "background-dark": "#11221a",
                "card-dark": "#1a3328",
                "text-subtle": "#92c9ad",
            },
            fontFamily: {
                display: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
                sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
