import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { FilterType } from '../../../tools/types'


type Props = {
    categories: [],
    setFilters: (values: FilterType[], cat: string) => void,
    cat: string,
    placeholder: string
}

const FilterComponent:React.FC<Props> = ({ categories, setFilters, cat, placeholder }) => {
    const [selectedFilters, setSelectedFilters] = useState<FilterType[]>([])

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
