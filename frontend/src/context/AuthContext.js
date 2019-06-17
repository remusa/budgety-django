import React, { createContext, useContext } from 'react'
import { API_ENDPOINT } from '../config'

const AuthContext = createContext()

const AuthProvider = props => {
    // if (loading) {
    //     return <div>Loading...</div>
    // }

    const register = async () => {
        const user = {}
        const conf = {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(user),
        }
        const response = await fetch(`${API_ENDPOINT}/auth/register`, conf)
    }

    const login = async () => {
        const user = {}
        const conf = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        }
        const response = await fetch(`${API_ENDPOINT}/auth/login`, conf)
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
