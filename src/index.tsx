import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2c6157" },
    secondary: { main: "#6fd056" },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
