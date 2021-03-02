import * as MESSAGES from '../messages'


export const validateEmailField = (value) => {
    if(value.trim() === '') return MESSAGES.emailRequired

    return null
}

export const validateEmails = (email, emailConfirm) => {
    return email !== emailConfirm ? MESSAGES.emailsNoMatch : null
}

export const validatePasswordField = (value) => {
    if(value.trim() === '') return MESSAGES.passwordRequired

    return null
}

export const validatePasswords = (password, passwordConfirm) => {
    return password !== passwordConfirm ? MESSAGES.passwordsNoMatch : null
}
