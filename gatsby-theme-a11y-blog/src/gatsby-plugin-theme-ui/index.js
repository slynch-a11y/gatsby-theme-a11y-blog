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
    text: "black", //black text in main region
    background: "#f5f6f8", //#e0fbfc light blue background color of main region
    primary: "#3d5a80", //dark blue header color
    secondary: "#f5f6f8", //#98c1d9 light blue color
    headerText: "#fff", //white header text
    accent: "white",
    muted: "#3d5a80",

    modes: {
      dark: {
        text: "#fff", //white text in main region
        background: "#293241", //dark blue background color of main region
        primary: "#98c1d9", //light blue header color
        secondary: "#293241", //dark blue color
        headerText: "black", //black header text
        accent: "black",
        muted: "#98c1d9",
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
    secondary: {
      padding: 2,
      backgroundColor: "primary",
      borderRadius: 2,
      color: "headerText",
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
      color: "accent",
    },
    input: {
      borderColor: "accent",
      borderWidth: "1px",
      backgroundColor: "primary",
      ":focus": {
        backgroundColor: "#f5f6f8",
        color: "black",
      },
      "&::placeholder": {
        color: "accent",
        fontWeight: "700",
      },
    },
  },
  //#F5AB98 = pink/salmon accent color
  buttons: {
    toggle: {
      color: "secondary",
      fontSize: 4,
      ":focus": {
        outlineColor: "accent",
        outlineWidth: "3px",
        outlineStyle: "solid",
      },
    },
    search: {
      color: "text",
      bg: "secondary",
      ":focus": {
        backgroundColor: "#f5f6f8",
        color: "black",
      },
    },
  },
  links: {
    logo: {
      color: "headerText",
    },
    nav: {
      px: 2,
      py: 2,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: "accent",
      fontSize: "2",

      ":hover": {
        textDecoration: "underline",
        color: "accent",
      },
      ":focus": {
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "accent",
        color: "accent",
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

  styles: {
    // the keys used here reference elements in MDX
    root: {
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      // the style object for each element
      // can reference other values in the theme

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
      color: "black",

      ":hover": {
        textDecoration: "none",
      },
      ":focus": {
        outlineColor: "muted",
        outlineWidth: "3px",
        outlineStyle: "solid",
        textDecoration: "none",
      },
      "&.active": {
        color: "yellow",
        textDecoration: "none",
      },
    },
    // more styles can be added as needed
  },
};
