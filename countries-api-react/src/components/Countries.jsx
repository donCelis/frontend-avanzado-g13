import { Link } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Countries = () => {
  const { list, error, loading } = useGetData()

  if (error) return <p>{error}</p>

  if (loading) return <p>...loading</p>

  return (
    <section className='row py-5 gy-4'>
      {list.map((index, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`/country/${index.name.common}`}>
            <article className='card'>
              <img className='card-img-top' src={index.flags.svg} alt={index.name.common} />
              <div className='card-body'>
                <p className='card-title'>{index.name.common}</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Countries
