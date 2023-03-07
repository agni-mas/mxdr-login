import { createTheme, ThemeOptions } from "@mui/material/styles";

const defaultTheme: ThemeOptions = {
  typography: {
    button: {
      textTransform: "none",
    },
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary:{
      main: '#7500C0',
      light:'#aa1efa'
    },
    secondary:{
      main: '#fafafa',
    },
  },
  ...defaultTheme,
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary:{
      main: '#7500C0'
    },
  },
  ...defaultTheme,
});

export default darkTheme;
