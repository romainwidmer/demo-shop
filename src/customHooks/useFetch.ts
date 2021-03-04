import { useState, useEffect } from 'react'

export const API_URL = 'http://localhost:3001'

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

                if(response.status !== 200) {
                    throw new Error(`L'url demandé n'est pas disponible`)
                }

                const jsonData = await response.json()

                if(Object.keys(jsonData).length === 0) {
                    throw new Error(`Aucune donnée ne correspond à votre demande`)
                }

                setData(jsonData)
            } catch(err) {
                console.log(err.message)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, error, loading }
}
