import { createContext, useState } from "react";
import { getTheme } from "../util/PortTheme";
import { ThemeProvider } from "@mui/material";

export const PortThemeContext = createContext();

export const PortThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = getTheme(mode);

  return (
    <PortThemeContext.Provider value={{ toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PortThemeContext.Provider>
  );
};
