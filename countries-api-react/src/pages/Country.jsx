import { Link, useParams } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { name = '' } = useParams()
  const { list, loading, error } = useGetData(name)

  if (error) return <p>{error}</p>

  if (loading) return <p>...loading</p>

  return (
    <>
      <p>Country</p>
      <p>{list.name.common}</p>
      <p>{list.capital}</p>
      <Link to='/'>Home</Link>
    </>
  )
}
export default Country
