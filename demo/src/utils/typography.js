import Typography from "typography"

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    googleFonts: [
      {
        name: "Roboto",
        styles: [],
      },
      {
        name: "Poppins",
        styles: []
      },
      {
        name: "Sacramento",
        styles: [],
      },
      {
        name: "Playfair Display",
        styles: [],
      },
      {
        name: "Proxima Nova",
        styles: [],
      }
    ],
    headerFontFamily: ["Roboto", "Arial", "Helvetica", "sans-serif"],
    bodyFontFamily: ["Poppins", "Tahoma", "Geneva", "sans-serif"],
  })
export default typography;