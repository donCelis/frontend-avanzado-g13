import { useRef } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const searchRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    searchRef.current.value
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
      <div className='container'>
        <a className='navbar-brand' href='#'>Logo</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#mainNavbar' aria-controls='mainNavbar' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='mainNavbar'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/countries'>Home</Link>
            </li>
          </ul>
          <form className='d-flex' onSubmit={handleSubmit}>
            <input ref={searchRef} className='form-control me-2' type='search' placeholder='Search country' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>🔍</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default NavBar
