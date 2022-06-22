import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { isValidToken, setSession } from '../utils/jwt'
import jwtDecode from 'jwt-decode'

const AuthContext = createContext({
  authed: false,
  init: false,
  loginAuth: () => new Promise()
})

const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(() => {
    const token = window.localStorage.token || ''

    return !!(token && isValidToken(token))
  })

  const [globalUser, setGlobalUser] = useState(null)

  const [init, setInit] = useState(false)

  // funciones para modificar el contexto (estado global)
  const loginAuth = async (username, password) => {
    const response = await axios.post('https://dummyjson.com/auth/login',
      { username, password })

    const user = response.data
    setSession(user.token)
    setGlobalUser(jwtDecode(window.localStorage.token))
    setAuthed(true)
  }

  // cuando se actualice el navegador va a setear el login
  useEffect(() => {
    const token = window.localStorage.token || ''
    setInit(true)

    try {
      if (token && isValidToken(token)) {
        setSession(token)
        setGlobalUser(jwtDecode(window.localStorage.token))
        setAuthed(true)
      } else {
        setAuthed(false)
      }
    } catch (error) {
      setAuthed(false)
    }
  }, [])

  const initialState = {
    loginAuth,
    authed,
    init,
    globalUser
  }

  return (
    <AuthContext.Provider value={initialState}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuthContext }
