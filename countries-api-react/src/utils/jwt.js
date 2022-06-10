import jwtDecode from 'jwt-decode'

// validar el token
const isValidToken = (token) => {
  if (!token) {
    return false
  }

  const { exp } = jwtDecode(token)
  const currentTime = Date.now()

  // const converDate = (date) => new Date(date)

  // console.log('current', converDate(currentTime))
  // console.log('exp', converDate(exp * 1000))

  // console.log((exp * 1000) > currentTime)

  return (exp * 1000) > currentTime
}

// guardar la sesión
const setSession = (token) => {
  if (token) {
    window.localStorage.setItem('token', token)
  } else {
    window.localStorage.removeItem('token')
  }
}

export { isValidToken, setSession }
