import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

export default function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle/>
        <ToastContainer/>
        <Provider store={store}>
          <Router/>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
