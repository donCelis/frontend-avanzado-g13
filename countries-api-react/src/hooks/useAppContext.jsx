import { useContext } from 'react'

import { AppContext } from '../context'

const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) throw new Error('No hay un contexto activo')

  return context
}

export default useAppContext
