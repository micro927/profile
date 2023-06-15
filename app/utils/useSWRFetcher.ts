import useSWR from 'swr'
import type { Fetcher } from 'swr'

function useSWRFetcher<ResultType>(url: string, options = {}) {
    const fetcher: Fetcher<ResultType, string> = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR<ResultType, Error>(url, fetcher, options)
    return {
        data,
        isLoading,
        isError: error
    }
}



export default useSWRFetcher
