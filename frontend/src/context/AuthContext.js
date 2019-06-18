import React, { createContext, useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { API_ENDPOINT } from '../config'

const AuthContext = createContext()

const AuthProvider = props => {
    const [user, setUser] = useState(null)

    // console.log(`${props.history}`)

    const redirectHome = () => {
        console.log(`REDIRECTING HOME`)
        // props.history.push('/')
        return <Redirect to='/' />
    }

    const register = async ({ email, username, password }) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        }
        try {
            const response = await fetch(`${API_ENDPOINT}/auth/register`, options)
            const data = await response.json()
            console.log(`${Object.entries(data)}`)
            setUser(data)
            localStorage.setItem('token', data.token)
            redirectHome()
        } catch (err) {
            console.log(`REGISTRATION ERROR: ${err.message}`)
        }
    }

    const login = async ({ username, password }) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }
        try {
            const response = await fetch(`${API_ENDPOINT}/auth/login`, options)
            const data = await response.json()
            console.log(`LOGGING IN: ${Object.entries(data)}`)
            setUser(data.user)
            localStorage.setItem('token', data.token)
            redirectHome()
        } catch (err) {
            console.log(`LOGIN ERROR: ${err.message}`)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        redirectHome()
    }

    return (
        <AuthContext.Provider value={{ user, register, login, logout }} {...props}>
            {props.children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
}

export { AuthProvider, useAuth }
