import { useParams } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { name = '' } = useParams()
  const { list, loading, error } = useGetData(name)

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
      <p>{list.name.common}</p>
      <p>{list.capital}</p>
      <img width={400} height={300} src={list.flags.svg} alt={list.name.common} />
    </section>
  )
}
export default Country
