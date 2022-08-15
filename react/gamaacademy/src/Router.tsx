import { Routes, Route } from 'react-router-dom'
import { Contact } from './pages/Contact'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
// import { PrivateRoutes } from './private.routes'


export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}