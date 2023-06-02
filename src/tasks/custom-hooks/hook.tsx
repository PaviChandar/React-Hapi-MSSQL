import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url: string) => {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then((resp) => {
                setLoading(false)
                setError(false)
                setResponse(resp.data.data)
            })
            .catch((error) => {
                setLoading(false)
                setError(true)
                setResponse(error)
            })
    }, [url])

    return {
        response,
        loading,
        error
    }
}

export default useFetch