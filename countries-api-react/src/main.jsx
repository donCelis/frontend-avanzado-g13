import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// styles
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// components
import App from './components/App'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <App />
  </StrictMode>
)
