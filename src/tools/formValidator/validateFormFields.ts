import * as MESSAGES from '../messages'


export const validateEmailField = (value: string) => {
    if(value.trim() === '') return MESSAGES.emailRequired

    return null
}

export const validateEmails = (email: string, emailConfirm: string) => {
    return email !== emailConfirm ? MESSAGES.emailsNoMatch : null
}

export const validatePasswordField = (value: string) => {
    if(value.trim() === '') return MESSAGES.passwordRequired

    return null
}

export const validatePasswords = (password: string, passwordConfirm: string) => {
    return password !== passwordConfirm ? MESSAGES.passwordsNoMatch : null
}
