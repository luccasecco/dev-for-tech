import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { SocialMedia } from "./pages/SocialMedia";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/midias" element={<SocialMedia />} />
        <Route path="/contato" element={<SocialMedia />} />
      </Route>

    </Routes>
  )
}