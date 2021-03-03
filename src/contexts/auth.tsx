import React, { useState, useEffect, createContext } from 'react'

type Props = {
    children: any
}

type LoginPropType = {
    email: string,
    password: string
}

type SignupPropType = {
    email: string,
    password: string
}

type UserType = {
    id: number,
    email: string,
    password: string
}


const user = localStorage.getItem('user')
const storage = user ? JSON.parse(user) : null
//const storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null


export const AuthContext = createContext(null)


const AuthContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<UserType | null>(storage)
    const [loading, setLoading] = useState<boolean>(true)
    const [loginError, setLoginError] = useState<string | null>(null)
    const [signupError, setSignupError] = useState<string | null>(null)


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user ? user: null))
    }, [user])


    // Simple login method only for demo
    const handleLogin = async ({ email, password }: LoginPropType) => {
        try {
            setLoading(true)
            setLoginError(null)

            const response = (await (await fetch(`http://localhost:3001/users`)).json())
            const userFound = response.find((u: UserType) => u.email === email && u.password === password)

            if(!userFound) {
                throw new Error('bad credentials')
            }
            setUser(userFound)
        } catch(err) {
            setLoginError(err)
        } finally {
            setLoading(false)
        }
    }


    // Simple signup method only for demo
    const handleSignup = async ({ email, password }: SignupPropType) => {
        try {
            setLoading(true)
            setSignupError(null)

            const response = (await (await fetch(`http://localhost:3001/users`)).json())
            const userFound = response.find((u: UserType) => u.email === email)

            if(userFound) {
                throw new Error('User already exist')
            }

            const postResponse = await fetch(`http://localhost:3001/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            if(postResponse.status === 201) {
                const newUser = await postResponse.json()
                setUser(newUser)
            } else {
                throw new Error('An occured while creating the new user')
            }
        } catch(err) {
            setSignupError(err)
        } finally {
            setLoading(false)
        }
    }

    const handleSignOut = () => setUser(null)

    // Reset
    const resetLoginError = () => setLoginError(null)
    const resetSignupError = () => setSignupError(null)

    const contextValues: any = {
        user, loginError, signupError, loading,
        handleLogin,
        handleSignup,
        handleSignOut,
        resetLoginError, resetSignupError
    }

    return(
        <AuthContext.Provider value={contextValues}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
