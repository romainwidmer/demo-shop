import { useState, useEffect } from 'react'


const mobileMaxWidth = 980


export default function useWindowResize() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileMaxWidth)

    useEffect(() => {
        window.addEventListener('resize', handleSizeChange)

        return() => {
            window.removeEventListener('resize', handleSizeChange)
        }
    }, [isMobile])


    const handleSizeChange = () => {
        return setIsMobile(window.innerWidth < mobileMaxWidth)
    }

    return isMobile
}
