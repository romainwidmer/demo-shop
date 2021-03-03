import {
    validateEmailField,
    validateEmails,
    validatePasswordField,
    validatePasswords
} from './validateFormFields'

type ValueType = {
    email: string,
    emailConfirm: string,
    password: string,
    passwordConfirm: string
}

type ErrorType = {
    email: string | null,
    emailConfirm: string | null,
    password: string | null,
    passwordConfirm: string | null
}


export default function validateForm(values: ValueType) {
    let errors = <ErrorType>{}

    const emailError = validateEmailField(values.email)
    if(emailError) errors.email = emailError

    const passwordError = validatePasswordField(values.password)
    if(passwordError) errors.password = passwordError

    const emailConfirmError = validateEmails(values.email, values.emailConfirm)
    if(emailConfirmError) errors.emailConfirm = emailConfirmError

    const passwordConfirmError = validatePasswords(values.password, values.passwordConfirm)
    if(passwordConfirmError) errors.passwordConfirm = passwordConfirmError

    return errors
}
