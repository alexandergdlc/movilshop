/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0f172a', // Dark blue/black like the site
                accent: '#f97316', // Orange accent
            }
        },
    },
    plugins: [],
}
