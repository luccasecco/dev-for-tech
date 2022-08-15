import { Route, Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'


export const PrivateRoutes = ({ component: Component, path: Path, ...rest}: any) => { 

  const isLoggedIn: string | null = localStorage.getItam('@gamaServiceToken') 

  const isSectionActive: any = () => {
    if(isLoggedIn === null) {
      return false
    } else {
      const onlyToken = isLoggedIn
      const tokenPayload: any = jwt_decode(onlyToken)
      const expSeconds = tokenPayload.exp
      const timeNow = Date.now() / 1000

      return timeNow > expSeconds ? false : true
    }
  }

  return <Route { ...rest } element={(props: JSX.IntrinsicAttributes) => isSectionActive() ? <Component {...props}/> : <Navigate replace to="/"/> }/>

  
}

