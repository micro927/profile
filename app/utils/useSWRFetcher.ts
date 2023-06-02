import useSWR from 'swr'
import type { Fetcher } from 'swr'

function useSWRFetcher<T>(url: string, options = {}) {
    const fetcher: Fetcher<T, string> = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR<T, Error>(url, fetcher, options)
    return {
        data,
        isLoading,
        isError: error
    }
}



export default useSWRFetcher
