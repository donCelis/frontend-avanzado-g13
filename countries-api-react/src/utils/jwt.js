import jwtDecode from 'jwt-decode'

// validar el token
const isValidToken = (token) => {
  if (!token) {
    return false
  }

  const { exp } = jwtDecode(token)
  // el error es que estaba diviendo entre cien, y es entre mil
  const currentTime = Date.now() / 1000

  // const converDate = (date) => new Date(date)

  // console.log('current', converDate(currentTime))
  // console.log('exp', exp * 1000)

  // console.log((exp * 1000) > currentTime)

  return exp > currentTime
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
