/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00ffcc',
                dark: {
                    900: '#0a0f1e', // Background
                    800: '#111827', // Surface
                    700: '#1f2937',
                },
                textPrimary: '#e2e8f0'
            },
            keyframes: {
                glitch: {
                    '0%, 100%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' }
                },
                bounce: {
                    '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
                    '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
                }
            },
            animation: {
                'glitch': 'glitch 0.4s cubic-bezier(.25, .46, .45, .94) both infinite',
                'shimmer': 'shimmer 4s linear infinite',
                'bounce-slow': 'bounce 2s infinite',
            }
        },
    },
    plugins: [],
}
