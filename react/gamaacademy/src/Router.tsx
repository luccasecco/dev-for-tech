import { Routes, Route } from 'react-router-dom'
import { Courses } from './pages/Courses'
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
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}