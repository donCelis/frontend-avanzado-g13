import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Private from './guards/Private'
import Public from './guards/Public'
// pages
import App from './pages/App'
import Login from './pages/Login'

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route
          path='/login'
          element={
            <Public>
              <Login />
            </Public>
          }
          index
        />
        <Route
          path='/app'
          element={
            <Private>
              <App />
            </Private>
          }
          index
        />
      </Routes>
    </Router>
  )
}

export default Paths
