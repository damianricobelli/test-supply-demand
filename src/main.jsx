import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "styled-components";
import { createTheme } from "styled-breakpoints";

const theme = createTheme({
  sm: "560px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
