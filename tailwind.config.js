/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem" }, screens: { xl: "1240px" } },
        extend: {
            // ENERSI brand palette — taken from the logo files
            colors: {
                navy: { 950: "#04121f", 900: "#071c2f", 800: "#0a263e", 700: "#12344f", 600: "#1d4a6c", 100: "#e6edf4", 50: "#f3f6f9" },
                volt: { 300: "#ffc266", 400: "#ffb03f", 500: "#ff9e19", 600: "#e88a05", 700: "#b86b00" },
                ink: { DEFAULT: "#0a263e", muted: "#5a6b7b", soft: "#8a98a6" },
                line: "#dde4eb",
            },
            fontFamily: {
                sans: ["Manrope", "system-ui", "sans-serif"],
                display: ["Montserrat", "Manrope", "sans-serif"],
            },
            boxShadow: {
                card: "0 1px 2px rgba(10,38,62,.05), 0 8px 24px -12px rgba(10,38,62,.18)",
                lift: "0 2px 4px rgba(10,38,62,.06), 0 24px 48px -20px rgba(10,38,62,.35)",
            },
        },
    },
    plugins: [],
};
