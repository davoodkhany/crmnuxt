/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],

    theme: {
        extend: {
            color: {

            },
            screens: {
                'xs': '420px',
                'sm': '576px',
                'md': '768px',
                'lg': '922px',
                'xl': '1200px',
                'xxl': '1400px'
            },

            boxShadow: {
                'tab-item': 'rgba(0, 0, 0 , 0.1) 0px 3px 5px',
                'tab-item-hover': 'rgba(0, 0, 0, 0.2) 0px 3px 8px',
                'nav': 'rgba(100,100,111,0.2) 0px 7px 29px 0px'

            }
        },

    },






}