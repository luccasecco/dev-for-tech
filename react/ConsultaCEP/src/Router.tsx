import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home/Home";
import { SavedCards } from "./pages/SavedCards/SavedCards";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/cards" element={<SavedCards />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}