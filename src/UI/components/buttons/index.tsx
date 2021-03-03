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


export const CustomButton = ({ label, color='blue-grey', type='submit', handleClick }: CustomButtonProps) => (
    <button type={type} className={`button ${color}`} onClick={handleClick}>
        <label>{ label }</label>
    </button>
)

type CustomLinkProps = {
    label: string,
    route: string,
    color?: string
}

export const CustomLink = ({ label, route, color='blue-grey' }: CustomLinkProps) => (
    <Link to={route} className={`button ${color}`}>
        <label>{ label }</label>
    </Link>
)


type HomeLinkProps = {
    color?: string
}

export const HomeLink = ({ color='blue-grey' }: HomeLinkProps) => (
    <CustomLink route={HOME_PAGE} label={'découvrir les offres'} color={color} />
)
