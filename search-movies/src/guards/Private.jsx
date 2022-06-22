import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import Login from '../pages/Login'

const Private = ({ children }) => {
  const { authed, init } = useAuthContext()

  const { pathname } = useLocation()

  const [location, setLocation] = useState(null)

  if (!init) return <p>...loading</p>

  if (!authed) {
    if (pathname !== location) setLocation(pathname)
    return <Login />
    // return <Navigate to='/login' />
  }

  if (location && pathname !== location) {
    setLocation(null)
    return <Navigate to={location} replace />
  }

  return <>{children}</>
}
export default Private
