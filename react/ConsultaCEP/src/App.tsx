import { toast, ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import "react-toastify/dist/ReactToastify.css"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

