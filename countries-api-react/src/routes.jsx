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
      path: '/country/:name',
      element: <Country />
    },
    {
      path: '/404',
      element: <p className='text-center'>Page not found</p>
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  return element
}

export default Paths
