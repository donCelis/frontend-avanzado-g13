import { useEffect, useState } from 'react'
import { getData } from '../services'

const Countries = () => {
  const [listCountries, setListCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: countries } = await getData('colombia')
        setListCountries(countries)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [])

  if (error) {
    return (<p>{error}</p>)
  }

  if (loading) {
    return (<p>...Loading</p>)
  }

  return (
    <p>{listCountries[0].name.common}</p>
  )
}

export default Countries
