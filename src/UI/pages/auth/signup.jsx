import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'

// Import components
import SignupForm from '../../components/forms/signup'
import Alert from '../../components/alert'

// Import contexts
import { AuthContext } from '../../../contexts/auth'

// Import tools
import { USER_PAGE } from '../../../tools/routes'


const SignupPage = () => {
    const [message, setMessage] = useState(null)
    const { handleSignup, signupError, user, resetLoginError, resetSignupError } = useContext(AuthContext)

    useEffect(() => {
        resetLoginError()
        resetSignupError()
    }, [])

    const handleSignUpFormSubmit = values => handleSignup(values)

    if(signupError && !message) setMessage(signupError.message)

    if(user) return <Redirect to={USER_PAGE} />
    
    return(
        <>
            {message && <Alert message={message} /> }

            <SignupForm handleSignUpFormSubmit={handleSignUpFormSubmit} />
        </>
    )
}

export default SignupPage
