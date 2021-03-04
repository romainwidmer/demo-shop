import { useState, useEffect } from 'react'


export default function useFetch<Payload>(url: string): {
    data: Payload | null;
    loading: boolean;
    error: string | null;
} {
    const [data, setData] = useState<Payload | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(url)
                if(!response) throw new Error('No response')

                const jsonData: Payload = await response.json()

                if(Object.keys(jsonData).length === 0) {
                    throw new Error(`No data`)
                }

                setData(jsonData)
            } catch(err) {
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
