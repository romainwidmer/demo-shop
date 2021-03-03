import { useState, useEffect } from 'react'

export type InitialStateType = {
    email: string,
    emailConfirm?: string,
    password: string,
    passwordConfirm?: string
}

export type ErorsType = {
    email?: string,
    emailConfirm?: string,
    password?: string,
    passwordConfirm?: string
}

export type UseFormType = {
    initialState: InitialStateType,
    callback: () => void,
    validateForm: (values: InitialStateType) => {}
}


const useForm = ({ initialState, callback, validateForm }: UseFormType) => {
    const [values, setValues] = useState<InitialStateType>(initialState)
    const [errors, setErrors] = useState<ErorsType>({})
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

    const handleChange = (e:any) => {
        const { name, value } = e.target

        setValues({...values, [name]: value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setErrors(validateForm(values))
        setIsSubmitting(true)
    }

    return { values, errors, handleChange, handleSubmit }
}


export default useForm
