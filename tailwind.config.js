const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            gray: colors.coolGray,
            blue: colors.sky,
            red: colors.rose,
            pink: colors.fuchsia,
            green: colors.green
        },
        fontFamily: {
            sans: ['Niramit', 'Sans-serif'],
            serif: ['Open sans', 'serif'],
            mono: ['Space mono', 'SFMono-Regular'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    }
}
