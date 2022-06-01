import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1'

const getCountries = async () => {
  const req = await axios.get(baseUrl + '/all')
  const res = req
  return res
}

const getCountry = async (name) => {
  const req = await axios.get(baseUrl + '/name/' + name)
  const res = req
  return res
}

const getData = async (name = '') => {
  const setName = name ? `/name/${name}` : '/all'

  const req = await axios.get(baseUrl + setName)
  return req
}

export { getCountry, getCountries, getData }
