import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        const fetchData = async()=> {
            setLoading(true)
            try {
                const res = await axios.get(`http://localhost:8000/${url}`)
                setData(res.data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchData()
    },[url])

    const reFetch = async()=> {           
        setLoading(true)
        try {
            const res = await axios.get(`http://localhost:8000/${url}`)
            setData(res)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    return {data, loading, error, reFetch}
}

export default useFetch

