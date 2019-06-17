import React, { createContext, useContext } from 'react'
import { API_ENDPOINT } from '../config'

const AuthContext = createContext()

const AuthProvider = props => {
    // if (loading) {
    //     return <div>Loading...</div>
    // }

    const register = async (email, username, password) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        }
        try {
            const response = await fetch(`${API_ENDPOINT}/auth/login`, options)
            const data = await response.json()
            localStorage.setItem('token', data.token)
            console.log(localStorage.getItem('token'))
        } catch (err) {
            console.log(`LOGIN ERROR: ${err.message}`)
        }
    }

    const login = async (username, password) => {
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
            localStorage.setItem('token', data.token)
            console.log(localStorage.getItem('token'))
        } catch (err) {
            console.log(`LOGIN ERROR: ${err.message}`)
        }
    }

    const logout = () => {}

    return (
        <AuthContext.Provider value={{ register, login, logout }}>
            {{ ...props }}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
