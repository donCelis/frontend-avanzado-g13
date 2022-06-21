import React from 'react'
import ReactDOM from 'react-dom/client'
import Paths from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <Paths />
    </AuthProvider>
  </>
)
