import { createTheme } from "@mui/material/styles";

import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: green[300],
    },
  },
  // this part is not working; updates
  //   components: {
  //     MuiButton: {
  //       defaultProps: {
  //         variant: "contained",
  //         disableRipple: true,
  //       },
  //     },
  //   },
});

export default theme;
