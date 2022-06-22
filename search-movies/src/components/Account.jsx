import { useAuthContext } from '../context/AuthContext'

const Account = () => {
  const { globalUser } = useAuthContext()

  return globalUser && (
    <>
      <p>Account</p>
      <div className='card' style={{ width: '18rem' }}>
        <img src={globalUser.image} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{globalUser.username}</h5>
          <p className='card-text'>{globalUser.email}</p>
          <a href='#' className='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
    </>

  )
}

export default Account
