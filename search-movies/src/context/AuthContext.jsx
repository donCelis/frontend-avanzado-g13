import { createContext, useContext } from 'react'

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const initialState = {}

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
