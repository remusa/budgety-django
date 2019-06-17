import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderStyles = styled.header`
    grid-area: header;

    width: 100vw;
    font-size: 1.6rem;
    padding: 8px;
`

const Header = () => (
    <HeaderStyles>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <Link className='navbar-item' href='https://bulma.io' to='/'>
                    <img
                        src='https://bulma.io/images/bulma-logo.png'
                        alt='logo'
                        width='112'
                        height='28'
                    />
                </Link>

                <a
                    role='button'
                    className='navbar-burger burger'
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                >
                    <span aria-hidden='true' />
                    <span aria-hidden='true' />
                    <span aria-hidden='true' />
                </a>
            </div>

            <div id='navbarBasicExample' className='navbar-menu'>
                {/* <div className='navbar-start'>
                    <Link className='navbar-item' to='/'>
                        Home
                    </Link>
                </div> */}

                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <div className='buttons'>
                            <Link className='button is-primary' to='/register'>
                                <strong>Sign up</strong>
                            </Link>

                            <Link className='button is-light' to='/login'>
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </HeaderStyles>
)

export default Header
