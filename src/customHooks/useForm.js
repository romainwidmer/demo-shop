import { useState, useEffect } from 'react'


export default function useForm(initialState, callback, validateForm) {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)


    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        } else {
            if(isSubmitting) {
                const element = document.getElementsByName(Object.keys(errors)[0])[0]
                if(element) element.focus()
            }
        }
    }, [errors])

    const handleChange = e => {
        const { name, value } = e.target

        setValues({...values, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateForm(values))
        setIsSubmitting(true)
    }

    return { values, setValues, errors, handleChange, handleSubmit }
}
