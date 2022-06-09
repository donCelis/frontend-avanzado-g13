// import { useEffect } from 'react'
// import useAppContext from '../hooks/useAppContext'
import { useParams } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { name = '' } = useParams()
  // const { setQuery } = useAppContext()
  const { list, loading, error } = useGetData(name)

  /*  useEffect(() => {
    return () => {
      setQuery('')
    }
  }, []) */

  if (error) return <p>{error}</p>

  if (loading) {
    return (
      <section className='container py-5'>
        <p>...loading</p>
      </section>
    )
  }

  return (
    <section className='container py-5'>
      <p>{list[0].name.common}</p>
      <p>{list[0].capital}</p>
      <img width={400} height={300} src={list[0].flags.svg} alt={list[0].name.common} />
    </section>
  )
}
export default Country
