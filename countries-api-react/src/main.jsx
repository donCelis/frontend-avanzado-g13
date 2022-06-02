import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// styles
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Router
import Paths from './routes'

// components
import NavBar from './components/NavBar'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Paths />
    </BrowserRouter>
  </StrictMode>
)
