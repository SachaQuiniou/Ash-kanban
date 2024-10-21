/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            colors: {
                background: "#1c1917",
                primary: "#E0E0E0",
                secondary: "#193B2D",
                list: "#E8E8E8",
                card: "#F0F0F0",
            },
            animation: {
                "fill-bar": "fill 0.5s linear infinite",
            },
            keyframes: {
                fill: {
                    "0%": { width: "0%" },
                    "100%": { width: "100%" },
                },
            },
        },
    },
    plugins: [],
};
