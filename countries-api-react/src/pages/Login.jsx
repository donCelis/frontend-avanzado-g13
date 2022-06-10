import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const Login = () => {
  const { loginAuth } = useAuthContext()
  const [error, setError] = useState(null)

  const defaultValues = {
    username: 'kminchelle',
    password: '0lelplR'
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await loginAuth(defaultValues)
    } catch (wrong) {
      setError(wrong.response.data.message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: '5rem auto',
        width: '400px',
        display: 'grid',
        gap: '2rem',
        padding: '2rem'
      }}
      className='border border-primary rounded'
    >
      <div className='text-center'>
        <h3 className='m-0'>Login</h3>
        {error && <p className='m-0 text-danger'>{error}</p>}
      </div>
      <div>
        <input
          name='username'
          placeholder='Username'
          type='text'
          className='form-control'
          autoComplete='off'
        />
      </div>
      <div>
        <input
          name='password'
          placeholder='Password'
          type='password'
          className='form-control'
        />
      </div>
      <button type='submit' className='w-100 btn btn-primary'>Login</button>
    </form>
  )
}
export default Login
