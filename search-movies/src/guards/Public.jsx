import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Public = ({ children }) => {
  const { authed } = useAuthContext()

  if (authed) return <Navigate to='/app/main' replace />

  return <>{children}</>
}
export default Public
