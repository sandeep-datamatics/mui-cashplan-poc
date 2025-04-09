import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 121, 200, 1)", // brandprimary-base
    },
    secondary: {
      main: "rgba(48, 61, 96, 1)", // brand-secondary-base
    },
    error: {
      main: "rgba(220, 32, 32, 1)", // semanticerrorbase
    },
    warning: {
      main: "rgba(233, 161, 0, 1)", // semanticwarningbase
    },
    info: {
      main: "rgba(1, 122, 173, 1)", // semanticinfobase
    },
    success: {
      main: "rgba(41, 130, 59, 1)", // semanticsuccessbase
    },
    grey: {
      50: "rgba(255, 255, 255, 1)", // neutral-neutral-0
      100: "rgba(248, 249, 250, 1)", // neutral-neutral-1
      200: "rgba(241, 243, 245, 1)", // neutral-neutral-2
      300: "rgba(233, 236, 239, 1)", // neutral-neutral-3
      400: "rgba(222, 226, 230, 1)", // neutral-neutral-4
      500: "rgba(206, 212, 218, 1)", // neutral-neutral-5
      600: "rgba(173, 181, 189, 1)", // neutralneutral-6
      700: "rgba(106, 113, 120, 1)", // neutral-neutral-7
      800: "rgba(79, 87, 94, 1)", // neutralneutral-8
      900: "rgba(39, 43, 48, 1)", // neutral-neutral-9
      A100: "rgba(16, 18, 19, 1)", // neutral-neutral-10
    },
    background: {
      default: "rgba(255, 255, 255, 1)", // layout-colors-login
      paper: "rgba(255, 255, 255, 1)", // layout-colorsheader
      content: "rgba(243, 246, 248, 1)", // layout-colors-content
    },
    text: {
      primary: "rgba(16, 18, 19, 1)", // neutral-neutral-10
      secondary: "rgba(39, 43, 48, 1)", // neutral-neutral-9
      disabled: "rgba(173, 181, 189, 1)", // neutralneutral-6
    },
  },
  typography: {
    fontFamily: '"Roboto", Helvetica',
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
      letterSpacing: "0px",
    },
    h2: {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "35px",
      letterSpacing: "0px",
    },
    h3: {
      fontSize: "26px",
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: "0px",
    },
    h4: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "27px",
      letterSpacing: "0px",
    },
    h5: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "25px",
      letterSpacing: "0px",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "22px",
      letterSpacing: "0px",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0px",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "21px",
      letterSpacing: "0px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      letterSpacing: "0px",
    },
    button: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "21px",
      letterSpacing: "0px",
      textTransform: "none",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0px",
    },
    overline: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0px",
      textTransform: "none",
    },
  },
  shadows: {
    0: "var(--shadow-none)",
    1: "var(--shadow-XS)",
    2: "var(--shadow-S)",
    3: "var(--shadow-M)",
    4: "var(--shadow-L)",
    5: "var(--shadow-XL)",
    // Fill in the rest with default MUI shadows
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          "&:focus": {
            boxShadow: "var(--button-state-focus)",
          },
        },
        contained: {
          "&.Mui-disabled": {
            backgroundColor: "rgba(241, 243, 245, 1)", // neutral-neutral-2
            color: "rgba(173, 181, 189, 1)", // neutralneutral-6
          },
        },
        outlined: {
          borderColor: "rgba(173, 181, 189, 1)", // neutralneutral-6
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            "& fieldset": {
              borderColor: "rgba(173, 181, 189, 1)", // neutralneutral-6
            },
            "&:hover fieldset": {
              borderColor: "rgba(79, 87, 94, 1)", // neutralneutral-8
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(0, 121, 200, 1)", // brandprimary-base
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body2,
          color: "rgba(79, 87, 94, 1)", // neutralneutral-8
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: ({ theme }) => ({
          ...theme.typography.body2,
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgba(255, 255, 255, 1)", // layout-colors-login
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
