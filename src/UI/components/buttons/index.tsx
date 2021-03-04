import React from 'react'
import { Link } from 'react-router-dom'

// Import tools
import { HOME_PAGE } from '../../../tools/routes'


type CustomButtonProps = {
    label: string,
    color?: string,
    type?: "submit" | "button" | "reset",
    handleClick: () => void
}


export const CustomButton:React.FC<CustomButtonProps> = ({ label, color='blue-grey', type='submit', handleClick }) => (
    <button type={type} className={`button ${color}`} onClick={handleClick}>
        <label>{ label }</label>
    </button>
)

type CustomLinkProps = {
    label: string,
    route: string,
    color?: string
}

export const CustomLink:React.FC<CustomLinkProps> = ({ label, route, color='blue-grey' }) => (
    <Link to={route} className={`button ${color}`}>
        <label>{ label }</label>
    </Link>
)


type HomeLinkProps = {
    color?: string
}

export const HomeLink:React.FC<HomeLinkProps> = ({ color='blue-grey' }) => (
    <CustomLink route={HOME_PAGE} label={'découvrir les offres'} color={color} />
)
