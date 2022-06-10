import { Navigate, useRoutes } from 'react-router-dom'

// pages
import App from './pages/App'
import Login from './pages/Login'

// components
import Countries from './components/Countries'
import Country from './components/Country'
import Search from './components/Search'

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/login' replace />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/countries',
      element: <App />,
      children: [
        {
          element: <Countries />,
          index: true
        },
        {
          path: 'country/:name',
          element: <Country />
        },
        {
          path: 'search',
          element: <Search />
        }

      ]
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
