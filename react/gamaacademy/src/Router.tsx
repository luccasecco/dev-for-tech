import { Routes, Route } from 'react-router-dom'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'


export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}