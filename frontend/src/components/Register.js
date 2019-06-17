import React, { useState } from 'react'
import styled from 'styled-components'
import { stringify } from 'querystring'
import { API_ENDPOINT } from '../config'

const RegisterStyles = styled.section`
    grid-area: main;
`

export default function Register() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
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
        if (name === 'email') setEmail(value)
        if (name === 'username') setUsername(value)
        if (name === 'password') setPassword(value)
    }

    return (
        <RegisterStyles className='section'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className='columns is-vcentered '>
                        <div className='column is-4 is-offset-4'>
                            <div className='field'>
                                <label className='label' htmlFor='username'>
                                    Username
                                    <div className='control'>
                                        <input
                                            required
                                            name='username'
                                            className='input'
                                            type='text'
                                            placeholder='Text input'
                                            value={username}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <p className='help is-success'>This username is available</p>
                                </label>
                            </div>

                            <div className='field'>
                                <label className='label' htmlFor='email'>
                                    Email
                                    <div className='control has-icons-left has-icons-right'>
                                        <input
                                            required
                                            name='email'
                                            className='input is-danger'
                                            type='email'
                                            placeholder='Email input'
                                            value={email}
                                            onChange={handleChange}
                                        />
                                        <span className='icon is-small is-left'>
                                            <i className='fa fa-envelope' />
                                        </span>
                                        <span className='icon is-small is-right'>
                                            <i className='fa fa-warning' />
                                        </span>
                                    </div>
                                    <p className='help is-danger'>This email is invalid</p>
                                </label>
                            </div>

                            <div className='field'>
                                <label className='label' htmlFor='password'>
                                    Password
                                    <div className='control has-icons-left has-icons-right'>
                                        <input
                                            required
                                            className='input is-success'
                                            name='password'
                                            type='text'
                                            placeholder='Text input'
                                            value={password}
                                            onChange={handleChange}
                                        />
                                        <span className='icon is-small is-left'>
                                            <i className='fa fa-user' />
                                        </span>
                                        <span className='icon is-small is-right'>
                                            <i className='fa fa-check' />
                                        </span>
                                    </div>
                                </label>
                            </div>

                            <div className='field is-grouped'>
                                <div className='control'>
                                    <button type='submit' className='button is-link'>
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
