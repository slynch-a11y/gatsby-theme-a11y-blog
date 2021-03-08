

export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: "80%",
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    text: "black", 
    background: "#FFFFFF",
    primary: "#730071", //link and button color

    modes: {
      dark: {
        text: "#fff", 
        background: "#252D3C", 
        primary: "#ECCFEB", //link and button color 
        
      },
    },
    
  },
  styles: {
    root: {
      lineHeight: "body",
      fontWeight: "body",
      bg: "background",
      color: "text",
      fontSize: 3
    },
    inlineCode: {
      fontSize: "1.1rem",
    },
    h1: {
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
      fontSize: 5,
    },
    h2: {
      fontSize: 4,
    },
    h3: {
      fontSize: 3,
    },
    a: {
      color: "primary",
      textUnderlineOffset: "0.25rem",

      ":hover": {
        textDecoration: "none",
      },
      ":focus": {
        outlineColor: "primary",
        outlineWidth: "3px",
        outlineStyle: "solid",
        textDecoration: "none",
        outlineOffset: "4px",
      },
   
    },
    
  },
  cards: {
    primary: {
      padding: 2,
      backgroundColor: "white",
      borderRadius: 2,
      boxShadow: "0 0 8px black",
    },
   
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
      color: "accent",
    },
    input: {
      borderColor: "primary",
      borderWidth: "2px",
    
      ":focus": {
        backgroundColor: "#f5f6f8",
        color: "black",
        outlineColor: "primary",
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineOffset: "1px",
      },
      "&::placeholder": {
        color: "black",
        fontWeight: "700",
      },
    },
  },
 
  buttons: {
    primary: {
      color: "background",
    ":focus": {
      outlineColor: "primary",
      outlineWidth: "3px",
      outlineStyle: "solid",
      outlineOffset: "2px",
},      
  },
    toggle: {
      color: "primary",
      backgroundColor: "background",
      fontSize: 4,
      ":focus": {
        outlineColor: "primary",
        outlineWidth: "3px",
        outlineStyle: "solid",
      },
    },
    
  },
  links: {
    logo: {
      textDecoration: "none !important",
      color: "primary",
      ":focus": {
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "primary",
        color: "primary",
      },
    },
    nav: {
      px: 2,
      py: 2,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "primary",
      fontSize: "3",
      ":focus": {
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "primary",
        color: "primary",
      },
    },
    socialNav: {
      color: "primary",
      fontSize: "4",
      px: 3,
      py: 2,
      ":focus": {
        outlineColor: "primary",
        outlineWidth: "3px",
        outlineStyle: "solid",
      },
    },
  },

  
};
