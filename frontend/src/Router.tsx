import styled from '@emotion/styled'
import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import HomePage from './screens/home/HomePage'
import LoginPage from './screens/auth/LoginPage'
import RegisterPage from './screens/auth/RegisterPage'
import * as ROUTES from './constants/routes'
import TransactionsPage from './screens/transactions/TransactionsPage'

const NotFoundStyles = styled.div`
    grid-area: main;

    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

const NotFound: React.FC = () => {
    return (
        <NotFoundStyles>
            <h1>Sorry... nothing here.</h1>
            <Link to="/">Go home</Link>
        </NotFoundStyles>
    )
}

interface Props {}

const Router: React.FC<Props> = () => {
    return (
        <Switch>
            <Route path={ROUTES.HOME} exact component={HomePage} />
            <Route path={ROUTES.LOGIN} component={LoginPage} />
            <Route path={ROUTES.REGISTER} component={RegisterPage} />
            <Route path={ROUTES.TRANSACTIONS} component={TransactionsPage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Router
