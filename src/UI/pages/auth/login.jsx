import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'

// Import components
import Alert from '../../components/alert'
import LoginForm from '../../components/forms/login'

// Import contexts
import { AuthContext } from '../../../contexts/auth'

// Import tools
import { USER_PAGE } from '../../../tools/routes'


const LoginPage = () => {
    const [message, setMessage] = useState(null)
    const { handleLogin, loginError, user, resetLoginError, resetSignupError } = useContext(AuthContext)

    useEffect(() => {
        resetLoginError()
        resetSignupError()
    }, [])

    const handleLoginSubmit = values => handleLogin(values)

    if(loginError && !message) setMessage(loginError.message)

    if(user) return <Redirect to={USER_PAGE} />

    return(
        <>
            { message && <Alert message={message} /> }

            <LoginForm handleLoginSubmit={handleLoginSubmit} />
        </>
    )
}

export default LoginPage
