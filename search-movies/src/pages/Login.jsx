import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const Login = () => {
  const { loginAuth, authed } = useAuthContext()

  console.log(authed)

  const [userdata, setUserData] = useState({
    username: 'kminchelle',
    password: '0lelplR'
  })

  const handleForm = async (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    try {
      await loginAuth(username, password)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleForm} className='form-login border border-primary'>
      <div className='mb-3 text-center'>
        <h3>Search Movies</h3>
      </div>
      <div className='mb-3'>
        <input
          className='form-control'
          type='text'
          name='username'
          placeholder='Username'
          autoFocus
          autoComplete='off'
          defaultValue={userdata.username}
        />
      </div>
      <div className='mb-3'>
        <input
          className='form-control'
          type='password'
          name='password'
          placeholder='Password'
          defaultValue={userdata.password}
        />
      </div>
      <div className=''>
        <button className='btn btn-primary w-100' type='submit'>
          Login
        </button>
      </div>
    </form>
  )
}

export default Login
