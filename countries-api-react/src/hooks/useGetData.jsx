import { useEffect, useState } from 'react'
import { getData } from '../services'

const useGetData = (name = '') => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: countries } = await getData(name)
        setList(countries)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [name])

  return { list, loading, error }
}
export default useGetData
