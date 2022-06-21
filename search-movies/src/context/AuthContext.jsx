import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { isValidToken, setSession } from '../utils/jwt'

const AuthContext = createContext({
  authed: false,
  init: false,
  loginAuth: () => new Promise()
})

const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(() => {
    return isValidToken(window.localStorage.token)
  })
  const [init, setInit] = useState(false)

  // funciones para modificar el contexto (estado global)
  const loginAuth = async (username, password) => {
    const response = await axios.post('https://dummyjson.com/auth/login',
      { username, password })

    const user = response.data
    setSession(user.token)
    setAuthed(true)
  }

  // cuando se actualice el navegador va a setear el login
  useEffect(() => {
    const token = window.localStorage.token || ''
    setInit(true)

    try {
      if (token && isValidToken(token)) {
        setSession(token)
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
    init
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
