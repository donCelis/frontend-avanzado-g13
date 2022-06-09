import { createContext, useState } from 'react'

const AppContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [sms, setSms] = useState({ type: '' })

  const handleFilterCountries = (value) => {
    const filtered = countries.filter(country => {
      return country.name.common.toLowerCase().match(value.toLowerCase())
    })

    if (filtered.length === 0) {
      setFilterCountries([])
      setSms({
        type: 'error',
        message: 'Search not found'
      })
    } else {
      setFilterCountries(filtered)
      setSms({
        type: 'success',
        message: 'Countries found'
      })
    }
  }

  const initialValue = {
    setCountries,
    handleFilterCountries,
    filterCountries,
    sms
  }
  return (
    <AppContext.Provider value={initialValue}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
