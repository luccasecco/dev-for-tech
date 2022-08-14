import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ToastContainer }  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
      <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
