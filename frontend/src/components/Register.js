import React from 'react'
import styled from 'styled-components'

const RegisterStyles = styled.section`
    grid-area: main;
`

export default function Register() {
    return (
        <RegisterStyles className='section'>
            <div className='columns'>
                <div className='column is-4 is-offset-4'>
                    <div className='field'>
                        <label className='label' htmlFor='name'>
                            Name
                            <div className='control'>
                                <input
                                    required
                                    name='name'
                                    className='input'
                                    type='text'
                                    placeholder='Text input'
                                />
                            </div>
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
                                    value='hello@'
                                />
                                <span className='icon is-small is-left'>
                                    <i className='fa fa-envelope'></i>
                                </span>
                                <span className='icon is-small is-right'>
                                    <i className='fa fa-warning'></i>
                                </span>
                            </div>
                            <p className='help is-danger'>This email is invalid</p>
                        </label>
                    </div>
                    <div className='field'>
                        <label className='label' htmlFor='username'>
                            Username
                            <div className='control has-icons-left has-icons-right'>
                                <input
                                    required
                                    className='input is-success'
                                    name='username'
                                    type='text'
                                    placeholder='Text input'
                                    value='bulma'
                                />
                                <span className='icon is-small is-left'>
                                    <i className='fa fa-user'></i>
                                </span>
                                <span className='icon is-small is-right'>
                                    <i className='fa fa-check'></i>
                                </span>
                            </div>
                            <p className='help is-success'>This username is available</p>
                        </label>
                    </div>
                    <div className='field'>
                        <label className='label' htmlFor='phone'>
                            Phone
                            <div className='control'>
                                <input
                                    className='input'
                                    type='text'
                                    name='phone'
                                    placeholder='Phone Number'
                                />
                            </div>
                        </label>
                    </div>
                    <div className='field'>
                        <label className='label' htmlFor='gender'>
                            Gender
                            <div className='control'>
                                <div className='select'>
                                    <select required name='gender'>
                                        <option>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <label className='checkbox' htmlFor='terms'>
                                <input required name='terms' type='checkbox' />
                                <a href='#'>I accept the terms and conditions</a>
                            </label>
                        </div>
                    </div>
                    <div className='field is-grouped'>
                        <div className='control'>
                            <button type='button' className='button is-link'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </RegisterStyles>
    )
}
