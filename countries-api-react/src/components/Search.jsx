import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'

const Search = () => {
  const { filterCountries, sms } = useAppContext()

  if (sms.type === 'error') {
    return (<p className='alert alert-danger' role='alert'>{sms.message}</p>)
  }

  if (sms.type === 'success') {
    return (
      <>
        <p className='alert alert-success' role='alert'>
          {sms.message} <span>{filterCountries.length}</span>
        </p>
        <section className='row gy-4'>
          {filterCountries.map((index, key) => (
            <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <Link to={`/countries/country/${index.name.common}`}>
                <article className='card'>
                  <img loading='lazy' className='card-img-top' src={index.flags.svg} alt={index.name.common} />
                  <div className='card-body'>
                    <p className='card-title'>{index.name.common}</p>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </section>
      </>
    )
  }

  return (
    <p className='alert alert-info' role='alert'>Busque un pais</p>
  )
}
export default Search
