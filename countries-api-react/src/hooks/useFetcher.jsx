import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url) => axios.get(url).then(res => res.data).catch(err => err)

const useFetcher = (baseUrl) => {
  return useSWR(baseUrl, fetcher, { suspense: true })
}
export default useFetcher
