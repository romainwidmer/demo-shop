import { validateEmailField, validatePasswordField } from './validateFormFields'

type ValueType = {
    email: string,
    password: string
}

type ErrorType = {
    email: string | '',
    password: string | ''
}

export default function validateForm(values: ValueType) {
    let errors = <ErrorType>{}

    const emailError = validateEmailField(values.email)
    if(emailError) errors.email = emailError

    const passwordError = validatePasswordField(values.password)
    if(passwordError) errors.password = passwordError

    return errors
}
