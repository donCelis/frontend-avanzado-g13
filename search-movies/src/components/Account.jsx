import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Account = () => {
  const { globalUser, logOut } = useAuthContext()

  const navigate = useNavigate()

  const handleLogut = () => {
    logOut()
    navigate('/login', { replace: true })
  }

  return globalUser && (
    <>
      <p>Account</p>
      <div className='card' style={{ width: '18rem' }}>
        <img src={globalUser.image} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{globalUser.username}</h5>
          <p className='card-text'>{globalUser.email}</p>
          <button onClick={handleLogut} className='btn btn-primary'>Log Out</button>
        </div>
      </div>
    </>

  )
}

export default Account
