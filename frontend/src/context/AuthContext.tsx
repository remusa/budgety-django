import nprogress from 'nprogress'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { API_ENDPOINT } from '../constants/constants'
import '../static/nprogress.css'

interface IContextProps {
    user: string | null
    isLogged: boolean
    register: ({ email, username, password }: any) => void
    login: ({ username, password }: any) => void
    logout: () => void
}

const AuthContext = createContext({} as IContextProps)

interface Props {
    history?: any
    children?: any
    props?: any
}

const UserProvider: React.FC<Props> = ({ history, children, ...props }) => {
    const token = localStorage.getItem('token')
    const [isLogged, setIsLogged] = useState<boolean>(token ? true : false)
    const [user, setUser] = useState<string | null>(localStorage.getItem('user'))

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [token])

    const redirectHome = () => {
        nprogress.start()
        history.push('/')
        nprogress.done()
    }

    interface IData {
        data: {
            user: {
                username: string
            }
            token: string
        }
    }

    const setCredentials = ({ data }: IData) => {
        localStorage.setItem('token', data.token)

        const userData = data.user
        localStorage.setItem('user', userData.username)
        setUser(data.user.username)

        redirectHome()

        nprogress.done()
    }

    const removeCredentials = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)

        redirectHome()
    }

    interface IUser {
        email?: string
        username: string
        password: string
    }

    const register = async ({ email, username, password }: IUser) => {
        nprogress.start()

        const data = await fetch(`${API_ENDPOINT}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        })
            .then(response => response.json())
            .catch(err => {
                console.log(`LOGIN ERROR: ${err.message}`)
                nprogress.done()
            })

        setCredentials({ data })
    }

    const login = async ({ username, password }: IUser) => {
        nprogress.start()

        const data = await fetch(`${API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => response.json())
            .catch(err => {
                console.log(`LOGIN ERROR: ${err.message}`)
                nprogress.done()
            })

        await setCredentials({ data })
    }

    const logout = async () => {
        nprogress.start()

        await fetch(`${API_ENDPOINT}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: '',
        }).catch(err => {
            console.log(`LOGOUT ERROR: ${err.message}`)
            nprogress.done()
        })

        removeCredentials()
        nprogress.done()
    }

    // user
    return (
        <AuthContext.Provider value={{ user, isLogged, register, login, logout }} {...props}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }

    return context
}

const AuthProvider = withRouter(UserProvider)

export default AuthProvider
