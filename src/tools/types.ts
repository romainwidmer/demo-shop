export type OfferType = {
    id: number,
    title: string,
    description: string,
    price: number,
    ratings: number,
    category: string,
    location: string
}

export type CartItem = {
    item: OfferType,
    qte: number
}

export type UserType = {
    id: number,
    email: string,
    password: string
}

// React-router-dom
export type RouterType = {
    id: string
}

// Nav
export type NavLinkType = {
    id: number,
    title: string,
    route: string,
    component: React.FC
}

// Filters
export type FilterType ={
    label: string,
    value: string,
    cat: string
}