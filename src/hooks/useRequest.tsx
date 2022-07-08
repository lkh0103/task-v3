import axios, {AxiosRequestConfig} from "axios";
import { useState } from "react";

const createRequest = (options: AxiosRequestConfig) => {
    const defaultOptions: AxiosRequestConfig = {}
    return axios.create(
        Object.assign({}, defaultOptions, options)
    )
}

export default function useRequestWithState () {
    const [loading, setLoading] = useState(false)

    const request = createRequest({})

    const api = (url: string) => {
        setLoading(true)
        return request(url)
                .then(data => {
                    return data.data
                })
                .finally(() => setLoading(false))
        
    }

    return {
        loading,
        api
    }
}

export const useRequest = () => {
    const request = createRequest({})
    return request
}