import React, { useState } from 'react'
import styled from 'styled-components'
import { API_ENDPOINT } from '../config'

const LoginStyles = styled.section`
    grid-area: main;
`

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
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

    const handleChange = e => {
        const { name, value } = e.target
        e.preventDefault()
        if (name === 'username') setUsername(value)
        if (name === 'password') setPassword(value)
    }

    return (
        <LoginStyles className='section'>
            <form method='POST' onSubmit={handleSubmit}>
                <fieldset>
                    <div className='columns'>
                        <div className='column is-4 is-offset-4'>
                            <div className='field'>
                                <label className='label' htmlFor='username'>
                                    <p className='control has-icons-left has-icons-right'>
                                        <input
                                            required
                                            name='username'
                                            className='input'
                                            type='text'
                                            placeholder='Username'
                                            value={username}
                                            onChange={handleChange}
                                        />
                                        <span className='icon is-small is-left'>
                                            <i className='fa fa-envelope' />
                                        </span>
                                        <span className='icon is-small is-right'>
                                            <i className='fa fa-check' />
                                        </span>
                                    </p>
                                </label>
                            </div>

                            <div className='field'>
                                <label className='label' htmlFor='password'>
                                    <p className='control has-icons-left'>
                                        <input
                                            required
                                            name='password'
                                            className='input'
                                            type='password'
                                            placeholder='Password'
                                            value={password}
                                            onChange={handleChange}
                                        />
                                        <span className='icon is-small is-left'>
                                            <i className='fa fa-lock' />
                                        </span>
                                    </p>
                                </label>
                            </div>
                            <div className='field'>
                                <p className='control'>
                                    <button type='submit' className='button is-success'>
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
