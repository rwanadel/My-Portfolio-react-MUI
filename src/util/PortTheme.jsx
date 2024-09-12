import { createTheme } from "@mui/material";

export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#dfd3ca" : "#bdbdbd",
      },
    },
  });
};
