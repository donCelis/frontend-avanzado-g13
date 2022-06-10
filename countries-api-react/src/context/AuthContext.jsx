import axios from 'axios'
import { useState, useContext, createContext, useEffect } from 'react'
import { isValidToken, setSession } from '../utils/jwt'

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(false)
  const [init, setInit] = useState(false)

  const loginAuth = async ({ username, password }) => {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password
    })

    const user = response.data

    setSession(user.token)
    setAuthed(true)
    console.log('inicio de sesión correcto')
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    setInit(true)
    console.log(isValidToken(token))

    try {
      if (token && isValidToken(token)) {
        setSession(token)
        setAuthed(true)
        console.log('sesión activa')
      } else {
        console.log('no hay sesión')
        setAuthed(false)
      }
    } catch (error) {
      console.log('catch error')
      setAuthed(false)
    }
  }, [])

  const initialValues = {
    loginAuth
  }

  return (
    <AuthContext.Provider value={initialValues}>
      {children}
    </AuthContext.Provider>
  )
}

// creo el hook dentro del contexto para evitar crear un archivo
const useAuthContext = () => {
  return useContext(AuthContext)
}

export { useAuthContext, AuthProvider }
