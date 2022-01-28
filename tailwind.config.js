module.exports = {
    mode: "jit",
    content: [
        './public/*.html',
        './src/**/*.{ts,tsx}',
    ],
    darkMode: 'media', // true or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}
