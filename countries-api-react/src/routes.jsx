import { Navigate, useRoutes } from 'react-router-dom'
import App from './pages/App'
import Country from './pages/Country'

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/countries' />
    },
    {
      path: '/countries',
      element: <App />
    },
    {
      path: '/country',
      element: <Country />
    }
  ])

  return element
}

export default Paths
