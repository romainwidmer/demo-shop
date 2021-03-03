import React from 'react'
import Oups from './oups'

type Props = {
    message: string
}

const ErrorPage:React.FC<Props> = ({ message }) => (
    <div className="error">
        <Oups message={ message } />
    </div>
)

export default ErrorPage
