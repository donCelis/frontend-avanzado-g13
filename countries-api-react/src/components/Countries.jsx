import { useEffect, useState } from 'react'
import { getData } from '../services'

const Countries = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: countries } = await getData()
        setList(countries)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [])

  if (error) return <p>{error}</p>

  if (loading) return <p>...loading</p>

  return (
    list.map((index, key) => (
      <p key={key}>{index.name.official}</p>
    ))
  )
}

export default Countries
