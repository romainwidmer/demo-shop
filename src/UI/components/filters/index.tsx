import React, { useState, useEffect } from 'react'
import Select from 'react-select'

type Props = {
    categories: [],
    setFilters: (newState: {}, cat: string) => void,
    cat: string,
    placeholder: string
}

/**
 * This component handle the listing page
 * @param {Array} offersArray
 */
const FilterComponent:React.FC<Props> = ({ categories, setFilters, cat, placeholder }) => {
    const [selectedFilters, setSelectedFilters] = useState([])

    useEffect(() => {
        const newState = Array.from(new Set(selectedFilters))
        setFilters(newState, cat)
    }, [selectedFilters])

    const handleChange = (e:any) => {
        setSelectedFilters(e)
    }

    return(
        <Select options={categories} isMulti onChange={handleChange} placeholder={placeholder} />
    )
}

export default FilterComponent
