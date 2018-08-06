
/*********************************************
 * GLOBAL STYLES
 *********************************************/
const Themes = {
    colors: {
        blue:'#08275a',
        blueLight:'#1d4b93',
        yellow:'#ffa91f',
        orange:'#f77b39',
        black:'#333333',
        grey:'#707070',
        lightGrey: '#ccc',
        formGrey: '#8D8D8D',
        veryLightGrey: '#eee',
        white: '#fff'
    },
    background:{
        blueToBlueLight:'linear-gradient(#08275a,#1d4b93)',
        blueLightToBlue:'linear-gradient(#1d4b93,#08275a)',
        yellowToOrange:'linear-gradient(#ffa91f,#f77b39)'
    },
    fontsize: {
        h1: "38px",
        h2: "30px",
        h3: "25px",
        h4: "20px",
        p1: "18px",
        p2: "16px",
        p3: "14px"
    },
    fontWeight: {
        light:"300",
        regular:"400",
        bold:"700",
        black:"900"
    },
    EBFont: {
        p1: "18px"
    },
    breakpoints: { 
        xs: 0,
        sm: 375,
        md: 768,
        lg: 1200,
        xl: 1980
      }
}

export default Themes;