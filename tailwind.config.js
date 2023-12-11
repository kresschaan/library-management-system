/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-3": "rgb(var(--primary-3))",
                "primary-4": "rgb(var(--primary-4) / .45)",
                "primary-5": "rgb(var(--primary-5))",
                "secondary-1": "rgb(var(--secondary-1))",
                "background-1": "rgb(var(--background-1))",
            },
            fontFamily: {
                serif: ["ui-serif", "Georgia"],
                avenir: ["sans-serif", "Avenir"],
                "avenir-heavy": ["sans", "Avenir Heavy"],
            },
        },
    },
    plugins: [],
};
