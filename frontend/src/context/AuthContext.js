import React, { createContext, useContext, useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import nprogress from 'nprogress'
import { API_ENDPOINT } from '../config'

import '../static/nprogress.css'

const AuthContext = createContext()

const AuthProvider = props => {
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('user'))
    const [user, setUser] = useState(localStorage.getItem('user') || null)
    const { history } = props

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        }
        if (localStorage.getItem('user')) {
            setUser(localStorage.getItem('user'))
        }
    }, [])

    const redirectHome = () => {
        nprogress.start()
        history.push('/')
        nprogress.done()
    }

    const register = async ({ email, username, password }) => {
        nprogress.start()
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
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', data.user.username)
            setUser(data.user.username)
            setIsLogged(true)
            redirectHome()
        } catch (err) {
            console.log(`REGISTRATION ERROR: ${err.message}`)
        }
        nprogress.done()
    }

    const login = async ({ username, password }) => {
        nprogress.start()
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
            localStorage.setItem('user', data.user.username)
            setUser(data.user.username)
            setIsLogged(true)
            redirectHome()
        } catch (err) {
            console.log(`LOGIN ERROR: ${err.message}`)
        }
        nprogress.done()
    }

    const logout = async () => {
        nprogress.start()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: '',
        }
        try {
            await fetch(`${API_ENDPOINT}/auth/logout`, options)
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setUser(null)
            setIsLogged(false)
            redirectHome()
        } catch (err) {
            console.log(`LOGOUT ERROR: ${err.message}`)
        }
        nprogress.done()
    }

    return (
        <AuthContext.Provider value={{ user, isLogged, register, login, logout }} {...props}>
            {props.children}
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

export default withRouter(AuthProvider)
