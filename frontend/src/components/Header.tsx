import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const HeaderStyles = styled.header`
    grid-area: header;

    width: 100vw;
    font-size: 1.6rem;
    padding: 8px;
`

const Header: React.FC = () => {
    const { isLogged, user, logout } = useAuth()

    return (
        <HeaderStyles>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" href="https://bulma.io" to="/">
                        Home
                    </Link>

                    <a
                        role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    {/* <div className='navbar-start'>
                    <Link className='navbar-item' to='/'>
                        Home
                    </Link>
                </div> */}

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {!isLogged && (
                                    <>
                                        <Link className="button is-primary" to="/register">
                                            <strong>Sign up</strong>
                                        </Link>

                                        <Link className="button is-light" to="/login">
                                            Log in
                                        </Link>
                                    </>
                                )}

                                {isLogged && (
                                    <>
                                        <span>Welcome, {user}</span>

                                        <a
                                            onClick={() => console.log('toggleModal')}
                                            className="button is-primary"
                                        >
                                            <strong>Add transaction</strong>
                                        </a>

                                        <a onClick={logout} className="button is-danger">
                                            <strong>Log out</strong>
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </HeaderStyles>
    )
}

export default React.memo(Header)
