import React, { createContext, useContext } from 'react'
import { API_ENDPOINT } from '../config'

const AuthContext = createContext()

const UserProvider = props => {
    const logout = () => {}

    return (
        <AuthContext.Provider value={{ register, login, logout }}>
            {{ ...props }}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { UserProvider, useAuth }
