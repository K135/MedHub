/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#ececf5',
                    100: '#d5d4e6',
                    200: '#b2b0d1',
                    300: '#8683b6',
                    400: '#605c98',
                    500: '#45417e',
                    600: '#353268',
                    700: '#25225B', // Brand Primary
                    800: '#201e4a',
                    900: '#1a183b',
                    950: '#0f0e24',
                    DEFAULT: '#25225B',
                },
                secondary: {
                    50: '#fffbf0',
                    100: '#fff5d6',
                    200: '#ffebad',
                    300: '#ffdd7a',
                    400: '#FED15E', // Brand Secondary
                    500: '#fcb92a',
                    600: '#df960e',
                    700: '#b9710b',
                    800: '#965811',
                    900: '#7c4813',
                    950: '#482606',
                    DEFAULT: '#FED15E',
                },
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'], // Switching to Outfit for a more modern/premium feel if available, fallback to Inter
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2325225b' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
}
