import { useState, useEffect } from 'react'


export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = (await (await fetch(`http://localhost:3001/${url}`)).json())
                
                if(Object.keys(response).length === 0) {
                    throw new Error('data not found')
                }

                setData(response)
            } catch(err) {
                console.log('error')
                console.log(err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, error, loading }
}
