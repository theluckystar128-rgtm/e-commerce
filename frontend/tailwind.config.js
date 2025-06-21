/** @type { import("tailwindcss").Config } */
module.exports = {
    content: [
        "./public/index.html",
        "./src/**/*.js"
    ],
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 0.5s ease-out",
                fadeOut: "fadeOut 0.5s ease-in forwards"
            },
            keyframes: {
                fadeIn: {
                    "0%": {
                        opacity: "0"
                    },
                    "100%": {
                        opacity: "1"
                    }
                },
                fadeOut: {
                    "0%": {
                        opacity: "1"
                    },
                    "100%": {
                        opacity: "0"
                    }
                }
            }
        }
    },
    plugins: []
}