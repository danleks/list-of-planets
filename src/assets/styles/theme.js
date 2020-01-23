const theme = {
    color: {
        white: 'hsla(360, 100%, 100%, 1)',
        black: 'hsla(0, 0%, 0%, 1)',
        dark: 'hsl(0, 0%, 30%)',
        lightDark: 'hsla(0, 0%, 37%, 1)',
        lightGrey: 'hsla(0, 0%, 76%, 1)',
        lighterGrey: 'hsla(0, 0%, 95%, 1)',
        accentColor_1: 'hsla(324, 83%, 44%, 1)',
        accentColor_2: 'hsla(266, 47%, 42%, 1)',
        accentColor_3: 'hsla(215, 52%, 53%, 1)'
    },
    fontSize: {
        xxxl: '7rem',   
        xxl: '6rem', 
        xl: '5rem', 
        l: '4rem', 
        m: '3rem', 
        s: '2rem', 
        xs: '1.6rem', 
        xxs: '1.3rem'  
    },
    fontWeight: {
        bold: '700',
        semiBold: '600',
        regular: '400',
        thin: '300'
    },
    mq: {
        height: '@media(min-height: 800px)',
        mobile_1: '@media(min-width: 400px)',
        mobile_2: '@media(min-width: 500px)',
        tablet: '@media(min-width: 768px)',
        tablet_1: '@media(min-width: 900px)',
        desktop: '@media(min-width: 1041px)',
        huge: '@media(min-width: 1300px)',
        responsive_table: ' @media(max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)'
    },
    zIndex: {
        zIndex100: '100',
        zIndex90: '90'
    }
};

export default theme;