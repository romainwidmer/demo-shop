import React from 'react'
import Oups from './oups'


const ErrorPage = ({ message }) => (
    <div className="error">
        <Oups message={ message } />
    </div>
)

export default ErrorPage
