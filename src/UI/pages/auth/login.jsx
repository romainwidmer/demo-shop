import React, { useState } from 'react'

// Import components
import Alert from '../../components/alert'
import LoginForm from '../../components/forms/login'


const LoginPage = () => {
    const [message, setMessage] = useState(null)

    const handleLoginSubmit = values => {
        setMessage('Login success, but we stop here ;-) no user space implemented')
    }

    return(
        <>
            { message && <Alert message={message} /> }
            <LoginForm handleLoginSubmit={handleLoginSubmit} />
        </>
    )
}

export default LoginPage
