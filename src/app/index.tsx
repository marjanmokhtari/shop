import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../router";
import AppThemeProvider from "../style/theme-provider";
import { GlobalStyle } from "../style/globalStyles";

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppThemeProvider>
  );
};

export default App;
