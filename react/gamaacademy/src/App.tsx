import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ToastContainer }  from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from "./store";

import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <ToastContainer />
        <Router />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
