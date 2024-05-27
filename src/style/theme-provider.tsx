import { ThemeProvider } from "styled-components";
import { appTheme } from "./app-theme";
import { ThemeProps } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "../state-manager/store";

const AppThemeProvider = ({ children }: ThemeProps) => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  return <ThemeProvider theme={appTheme[mode]}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
