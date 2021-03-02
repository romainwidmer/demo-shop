import React, { useState, useEffect, createContext } from 'react'

const storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

export const AuthContext = createContext(null)

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(storage)
    const [loading, setLoading] = useState(true)
    const [loginError, setLoginError] = useState(null)
    const [signupError, setSignupError] = useState(null)


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user ? user: null))
    }, [user])


    // Simple login method only for demo
    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true)
            setLoginError(null)

            const response = (await (await fetch(`http://localhost:3001/users`)).json())
            const userFound = response.find(u => u.email === email & u.password === password)

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
    const handleSignup = async ({ email, password }) => {
        try {
            setLoading(true)
            setSignupError(null)

            const response = (await (await fetch(`http://localhost:3001/users`)).json())
            const userFound = response.find(u => u.email === email)

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

    const contextValues = {
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
