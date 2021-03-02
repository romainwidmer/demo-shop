import React from 'react'
import { Link } from 'react-router-dom'

// Import tools
import { HOME_PAGE } from '../../../tools/routes'


export const CustomButton = ({ label, color='blue-grey', type='submit', handleClick }) => (
    <button type={type} className={`button ${color}`} onClick={handleClick}>
        <label>{ label }</label>
    </button>
)

export const CustomLink = ({ label, route, color='blue-grey' }) => (
    <Link to={route} className={`button ${color}`}>
        <label>{ label }</label>
    </Link>
)

export const HomeLink = ({ color='blue-grey' }) => (
    <CustomLink route={HOME_PAGE} label={'découvrir les offres'} color={color} />
)
