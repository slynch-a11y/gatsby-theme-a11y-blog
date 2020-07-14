export default {
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    sizes: {
      container: "80%"
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    colors: {
      text: "black",  //black text in main region
      background: "#e0fbfc", //light blue background color of main region
      primary: "#3d5a80", //dark blue header color
      secondary: "#98c1d9",  //light blue color
      headerText: "#fff", //white header text
      accent: "white",
      muted: "#3d5a80",
      
      modes: {
        dark: {
          text: '#fff',  //white text in main region
          background: '#293241',  //dark blue background color of main region
          primary: '#98c1d9',  //light blue header color
          secondary: '#293241', //dark blue color
          headerText: "black", //black header text
          accent: "black",
          muted: "#98c1d9"
        }
      }
    },
  }