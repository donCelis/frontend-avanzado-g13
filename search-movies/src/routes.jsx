import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
// components
import Private from './guards/Private'
import Public from './guards/Public'
// pages
import Account from './components/Account'
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
        >
          {/* <Route index element={<p>Main App</p>} /> */}
          <Route path='main' element={<p>Main App</p>} />
          <Route path='settings' element={<p>Settings</p>} />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Paths
