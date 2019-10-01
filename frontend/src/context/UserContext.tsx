import React, { createContext, useContext } from 'react'

interface IContext {}

const AuthContext = createContext({} as IContext)

interface Props {
    props?: any
}

const UserProvider: React.FC<Props> = ({ props }) => {
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
