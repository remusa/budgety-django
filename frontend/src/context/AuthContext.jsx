import nprogress from 'nprogress'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { API_ENDPOINT } from '../constants/constants'
import '../static/nprogress.css'

const AuthContext = createContext()

const UserProvider = ({ history, children, ...props }) => {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : null
    const [isLogged, setIsLogged] = useState(token ? true : false)
    const [user, setUser] = useState(
        localStorage.getItem('user') ? localStorage.getItem('user') : null
    )

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

    const setCredentials = data => {
        const userData = data.user

        localStorage.setItem('token', data.token)
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

    const register = async ({ email, username, password }) => {
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

        await setCredentials(data)
    }

    const login = async ({ username, password }) => {
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

        await setCredentials(data)
    }

    const logout = async () => {
        nprogress.start()

        await fetch(`${API_ENDPOINT}/auth/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: '',
            })
            .catch(err => {
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
