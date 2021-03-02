import React, { useState, useEffect } from 'react'
import Select from 'react-select'


/**
 * This component handle the listing page
 * @param {Array} offersArray
 */
export default function FilterComponent({ categories, setFilters, cat, placeholder }) {
    const [selectedFilters, setSelectedFilters] = useState([])

    useEffect(() => {
        const newState = Array.from(new Set(selectedFilters))
        setFilters(newState, cat)
    }, [selectedFilters])

    const handleChange = (e) => {
        setSelectedFilters(e)
    }

    return(
        <Select options={categories} isMulti onChange={handleChange} placeholder={placeholder} />
    )
}
