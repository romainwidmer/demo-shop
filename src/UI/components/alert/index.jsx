import React from 'react'

/**
 *
 * @param type (info, error, success)
 * @param message (message to show within the alert)
 * @returns {JSX.Element}
 *
 */
export default function Alert({ type = 'info', message }) {
    return(
        <div className={`custom-alert ${type}`}>
            <p className={'no-margin'}>{ message }</p>
        </div>
    )
}
