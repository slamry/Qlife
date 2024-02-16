import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    mode: "light",

    primary: {
      main: "#80c954",
    },
    // secondary: {
    //   main: '#ff3f3f',
    // },
    // grey: {
    //   main: '#6C6C6C',
    // },
    // error: {
    //   main: '#FF3F3F',
    // },
    // success: {
    //   main: '#00AC1C',
    // },
    // default: {
    //   main: '#000000',
    // },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: "black",
          position: "static",
          boxShadow: "none",
          padding: "0.5% 2%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Ubuntu",
          margin: "0",
          padding: "0",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: "Ubuntu",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Ubuntu",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Ubuntu",
          color: "#0085ff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          textTransform: "none",
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
