module.exports = {
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      // Primary Green (Fern) -> NOW DEEP BLUE
      "fern-green": "hsl(var(--color-fern-green) / <alpha-value>)",
      "fern-green-forced": "hsl(var(--color-fern-green-default) / <alpha-value>)",
      
      // Backgrounds (Mint/Cream) -> NOW ALICE BLUE
      "mint-cream": "#F0F8FF", // Alice Blue
      "pippin": "#F0F8FF", // Keeping alias

      // Primary Yellow
      "kournikova": "#FFF280", 

      // Text/Secondary (Sage) -> NOW SLATE BLUE
      "sage-green": "hsl(var(--color-sage-green) / <alpha-value>)",
      "blue": "#1617C6", // Deep Blue -> Royal Blue
      "royal-blue": "#1617C6",
      "leaf-purple": "#6B6BFC",
      "leaf-red": "#FF3939",
      "cornflower-blue": "hsl(var(--color-sage-green) / <alpha-value>)",

      // Secondary / Pastels -> BLUE VARIANTS
      "titan-white": "#F4FAFF", // Light Blue Tint
      "periwinkle": "#B0C4DE", // Light Steel Blue
      "mona-lisa": "#4682B4", // Steel Blue
      "your-pink": "#87CEEB", // Sky Blue
      
      // Purple (Selection) -> Blue selection
      "malibu": "#2E86AB", 
      "transparent": "transparent"
    },
    spacing: {
      "0": "0rem",
      "4": "0.4rem",
      "6": "0.6rem",
      "8": "0.8rem",
      "10": "1rem",
      "12": "1.2rem",
      "15": "1.5rem",
      "16": "1.6rem",
      "18": "1.8rem",
      "20": "2rem",
      "22": "2.2rem",
      "28": "2.8rem",
      "30": "3rem",
      "32": "3.2rem",
      "37": "3.7rem",
      "43": "4.3rem",
      "46": "4.6rem",
      "48": "4.8rem",
      "52": "5.2rem",
      "62": "6.2rem",
      "68": "6.8rem",
      "72": "7.2rem",
      "88": "8.8rem",
      "94": "9.4rem"
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      11: "1.1rem",
      12: "1.2rem",
      14: "1.4rem",
      16: "1.6rem",
      18: "1.8rem",
      20: "2rem",
      22: "2.2rem",
      24: "2.4rem",
      25: "2.5rem",
      30: "3rem",
      35: "3.5rem",
      40: "4rem",
      60: "6rem",
    },
    fontWeight: {
      medium: 500,
      bold: 700,
      black: 900
    },
    borderRadius: {
      sm: "1.8rem",
      md: "2.7rem"
    },
    boxShadow: {},
    lineHeight: {
      // tight: 1.09,
      // normal: 1.33,
      // relaxed: 1.43,
      // loose: 1.45,
      11: "1.1rem",
      14: "1.4rem",
      16: "1.6rem",
      18: "1.8rem",
      22: "2.2rem",
      24: "2.4rem",
      25: "2.5rem",
      28: "2.8rem",
      30: "3rem",
      35: "3.5rem",
      40: "4rem",
      60: "6rem",
    },
    letterSpacing: {
      widest: "0.2em"
    },
    maxWidth: {
      sm: '25rem',
      wideContainer: '118rem',
      prose: '65ch'
    },
    extend: {
      screens: {
        xs: "768px",
        mobileMenu: "900px",
        menuFirstItem: "1000px",
        wide: "1440px"
      }
    }
  },
  variants: {},
  plugins: []
};
