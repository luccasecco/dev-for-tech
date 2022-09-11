import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

import "react-toastify/dist/ReactToastify.css"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>

  )
}

