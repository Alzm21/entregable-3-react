import axios from "axios"
import { useState } from "react"

const useFetch = () => {

    const [apiData, getApiData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const getApi = url => {
        axios.get(url)
            .then(res => {
                setHasError(false)
                getApiData(res.data)
            })
            .catch(err => {
                setHasError(true)
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return [apiData, getApi, isLoading, hasError]
    

}

export default useFetch