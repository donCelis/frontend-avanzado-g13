import { Outlet, NavLink } from 'react-router-dom'
import '../styles/App.css'

function App () {
  return (
    <>
      <section className='App container-fluid'>
        <div className='row'>
          <aside className='col-2 bg-dark text-light'>
            <p>Routes</p>
            <nav className='nav nav-pills flex-column'>
              <NavLink className='nav-link mb-3' aria-current='page' to='main'>App</NavLink>
              <NavLink className='nav-link mb-3' to='settings'>Settings</NavLink>
              <NavLink className='nav-link mb-3' to='account'>Account</NavLink>
            </nav>
          </aside>
          <aside className='col-10 bg-bg-primary'>
            <Outlet />
          </aside>
        </div>
      </section>
    </>
  )
}

export default App
