import '../styles/App.css'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { AppProvider } from '../context/AppContext'

function App () {
  return (
    <AppProvider>
      <NavBar />
      <div className='App container py-5'>
        <Suspense fallback={<p>...loading suspense</p>}>
          <Outlet />
        </Suspense>
      </div>
    </AppProvider>
  )
}

export default App
