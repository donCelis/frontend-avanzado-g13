import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
// pages
import App from './pages/App'
import Login from './pages/Login'

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} index />
      </Routes>
    </Router>
  )
}

export default Paths
