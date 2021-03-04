import React from 'react'


type Props = {
    type?: string,
    message: string
}

const Alert:React.FC<Props> = ({ type = 'info', message }) => (
    <div className={`custom-alert ${type}`}>
        <p className={'no-margin'}>{ message }</p>
    </div>
)

export default Alert
