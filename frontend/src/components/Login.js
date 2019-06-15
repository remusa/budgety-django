import React from 'react'
import styled from 'styled-components'

const LoginStyles = styled.section`
    grid-area: main;
`

export default function Login() {
    return (
        <LoginStyles className='section'>
            <div className='columns'>
                <div className='column is-4 is-offset-4'>
                    <div className='field'>
                        <label className='label' htmlFor='email'>
                            <p className='control has-icons-left has-icons-right'>
                                <input
                                    required
                                    name='email'
                                    className='input'
                                    type='email'
                                    placeholder='Email'
                                />
                                <span className='icon is-small is-left'>
                                    <i className='fa fa-envelope'></i>
                                </span>
                                <span className='icon is-small is-right'>
                                    <i className='fa fa-check'></i>
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
                                />
                                <span className='icon is-small is-left'>
                                    <i className='fa fa-lock'></i>
                                </span>
                            </p>
                        </label>
                    </div>
                    <div className='field'>
                        <p className='control'>
                            <button type='button' className='button is-success'>
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </LoginStyles>
    )
}
