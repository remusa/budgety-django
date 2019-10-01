import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { useAuth } from '../../context/AuthContext'

const LoginStyles = styled.section`
    grid-area: main;
`

const LoginPage = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { isLogged, login } = useAuth()

    if (isLogged) return <Redirect to={ROUTES.HOME} />

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login({ username, password })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        e.preventDefault()
        if (name === 'username') setUsername(value)
        else if (name === 'password') setPassword(value)
    }

    return (
        <LoginStyles className="section">
            <form method="POST" onSubmit={handleSubmit}>
                <fieldset>
                    <div className="columns">
                        <div className="column is-4 is-offset-4">
                            <div className="field">
                                <label className="label" htmlFor="username">
                                    <p className="control has-icons-left has-icons-right">
                                        <input
                                            required
                                            name="username"
                                            className="input"
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={handleChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope" />
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fa fa-check" />
                                        </span>
                                    </p>
                                </label>
                            </div>

                            <div className="field">
                                <label className="label" htmlFor="password">
                                    <p className="control has-icons-left">
                                        <input
                                            required
                                            name="password"
                                            className="input"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={handleChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock" />
                                        </span>
                                    </p>
                                </label>
                            </div>
                            <div className="field">
                                <p className="control">
                                    <button type="submit" className="button is-success">
                                        Login
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </LoginStyles>
    )
}

export default LoginPage
