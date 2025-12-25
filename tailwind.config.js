/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.ejs"],
    theme: {
        extend: {
            colors: {
                'premium-gold': '#D4AF37',       // Oro metálico
                'premium-rose': '#E0C097',       // Rose Gold suave
                'premium-dark': '#2D2D2D',       // Carbón elegante
                'premium-light': '#F9F7F2',      // Blanco crema
                'premium-accent': '#B76E79',     // Acento rosado
                'glass-white': 'rgba(255, 255, 255, 0.7)',
                'glass-border': 'rgba(255, 255, 255, 0.5)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Playfair Display', 'serif'], // Para títulos grandes
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [],
}
