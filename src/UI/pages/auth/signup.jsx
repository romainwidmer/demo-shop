import React, { useState } from 'react'

// Import components
import SignupForm from '../../components/forms/signup'
import Alert from '../../components/alert'


const SignupPage = () => {
    const [message, setMessage] = useState(null)

    const handleSignUpFormSubmit = values => {
        setMessage('Account created with success, but we stop here ;-)')
    }
    
    return(
        <>
            {message && <Alert message={message} /> }

            <SignupForm handleSignUpFormSubmit={handleSignUpFormSubmit} />
        </>
    )
}

export default SignupPage