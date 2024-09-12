import { useContext } from "react";
import { PortThemeContext } from "../providers/ThemeProvider";
import { Switch } from "@mui/material";

const ThemeSwitch = () => {
  const { toggleMode } = useContext(PortThemeContext);

  console.log(toggleMode);

  return <Switch onClick={toggleMode} defaultChecked color="#dfd3ca" />;
};

export default ThemeSwitch;
