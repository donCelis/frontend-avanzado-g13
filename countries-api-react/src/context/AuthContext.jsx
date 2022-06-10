import axios from 'axios'
import { useState, useContext, createContext } from 'react'

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
    setAuthed(true)
    console.log(user.token)
  }

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
