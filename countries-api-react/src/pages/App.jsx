import '../styles/App.css'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

function App () {
  return (
    <>
      <NavBar />
      <div className='App container py-5'>
        <Suspense fallback={<p>...loading suspense</p>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}

export default App
