import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1'

const getData = async (name = '') => {
  const setName = name ? `/name/${name}` : '/all'

  const req = await axios.get(baseUrl + setName)
  return req
}

export { getData }
