import { Navigate, useRoutes } from 'react-router-dom'
import App from './pages/App'
import Countries from './components/Countries'
import Country from './components/Country'

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/countries' />
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
