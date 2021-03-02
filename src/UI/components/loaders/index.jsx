import React from 'react'
import Loader from 'react-loader-spinner'


export default function AppLoader({ title, type='Rings', color='#00BFFF', width=100, height=100 }) {
    return(
        <div className="loader-container">
            <p>{title}</p>
            <Loader type={ type } color={ color } width={ width } height={ height } />
        </div>
    )
}
