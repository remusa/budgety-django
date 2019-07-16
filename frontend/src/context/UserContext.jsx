import React, { createContext, useContext } from 'react'

const AuthContext = createContext()

const UserProvider = props => {
    const register = () => {}
    const login = () => {}
    const logout = () => {}

    return (
        <AuthContext.Provider value={{ register, login, logout }}>
            {{ ...props }}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { UserProvider, useAuth }
