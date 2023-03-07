import axios from 'axios';
import { useState, useEffect } from 'react'

const useFetchSecurityData = (apiCall: string) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        axios.get(apiCall)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.error(err))
        setLoading(false)
    }

    return { data, loading }
}

export default useFetchSecurityData