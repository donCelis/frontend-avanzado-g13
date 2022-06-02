import { createContext, useState } from 'react'

const AppContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [query, setQuery] = useState('')

  const initialValue = {
    query,
    setQuery
  }
  return (
    <AppContext.Provider value={initialValue}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
