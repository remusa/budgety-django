import PropTypes from 'prop-types'
import React from 'react'
import AuthProvider from './AuthContext'
import { UserProvider } from './UserContext'

const AppProviders = ({ children }) => (
    <AuthProvider>
        <UserProvider>{children}</UserProvider>
    </AuthProvider>
)

AppProviders.propTypes = {
    children: PropTypes.any.isRequired,
}

export default AppProviders
