const Login = () => {
  return (
    <form
      style={{
        margin: '5rem auto',
        width: '400px',
        display: 'grid',
        gap: '2rem',
        padding: '2rem'
      }}
      className='border border-primary rounded'
    >
      <div>
        <h3 className='text-center m-0'>Login</h3>
      </div>
      <div>
        <input
          name='username'
          placeholder='Username'
          type='text'
          className='form-control'
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
