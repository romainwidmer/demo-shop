import { validateEmailField, validatePasswordField } from './validateFormFields'


export default function validateForm(values) {
    let errors = {}

    const emailError = validateEmailField(values.email)
    if(emailError) errors.email = emailError

    const passwordError = validatePasswordField(values.password)
    if(passwordError) errors.password = passwordError

    return errors
}
