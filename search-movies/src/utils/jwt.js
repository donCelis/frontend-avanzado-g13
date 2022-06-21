import jwtDecode from 'jwt-decode'

const isValidToken = (token) => {
  if (!token) return false

  const { exp } = jwtDecode(token)

  const currentTime = Date.now() / 1000

  return exp > currentTime
}

const setSession = (token) => {
  if (token) {
    window.localStorage.token = token
  } else {
    window.localStorage.removeItem('token')
  }
}

export { isValidToken, setSession }
