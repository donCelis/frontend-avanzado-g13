import { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('No hay un contexto para login')

  return context
}

export default useAuthContext
