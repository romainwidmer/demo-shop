import {
    validateEmailField,
    validateEmails,
    validatePasswordField,
    validatePasswords
} from './validateFormFields'


export default function validateSignup(values) {
    let errors = {}

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
