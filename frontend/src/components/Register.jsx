import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'

const RegisterStyles = styled.section`
    grid-area: main;
`

const Register = props => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { register, isLogged } = useAuth()

    if (isLogged) return <Redirect to="/" />

    const handleSubmit = e => {
        e.preventDefault()
        register({ email, username, password })
    }

    const handleChange = e => {
        const { name, value } = e.target
        e.preventDefault()
        if (name === 'email') setEmail(value)
        else if (name === 'username') setUsername(value)
        else if (name === 'password') setPassword(value)
    }

    return (
        <RegisterStyles className="section">
            <form method="POST" onSubmit={handleSubmit}>
                <fieldset>
                    <div className="columns is-vcentered ">
                        <div className="column is-4 is-offset-4">
                            <div className="field">
                                <label className="label" htmlFor="username">
                                    Username
                                    <div className="control">
                                        <input
                                            required
                                            name="username"
                                            className="input"
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <p className="help is-success">This username is available</p>
                                </label>
                            </div>

                            <div className="field">
                                <label className="label" htmlFor="email">
                                    Email
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            required
                                            name="email"
                                            className="input is-danger"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope" />
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fa fa-warning" />
                                        </span>
                                    </div>
                                    <p className="help is-danger">This email is invalid</p>
                                </label>
                            </div>

                            <div className="field">
                                <label className="label" htmlFor="password">
                                    Password
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            required
                                            className="input is-success"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={handleChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-user" />
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fa fa-check" />
                                        </span>
                                    </div>
                                </label>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button type="submit" className="button is-link">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </RegisterStyles>
    )
}

export default Register
