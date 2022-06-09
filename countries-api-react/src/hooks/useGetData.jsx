import { useEffect, useState } from 'react'
import { getData } from '../services'
import useAppContext from './useAppContext'

// como hacer un fetching de datos con un custom hook
const useGetData = (name = '') => {
  // const [list, setList] = useState([])
  const { setCountries } = useAppContext()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: countries } = await getData(name)
        // setList(countries)
        setCountries(countries)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [name])

  // return { list, loading, error }
  return { loading, error }
}
export default useGetData
