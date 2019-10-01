import styled from '@emotion/styled'
import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/screens/HomePage'
import Login from './components/screens/LoginPage'
import Register from './components/screens/RegisterPage'
import * as ROUTES from './constants/routes'
import './index.scss'

const AppStyles = styled.div`
    text-align: center;
    height: 100vh;

    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto minmax(auto, 1fr) auto;
    grid-template-areas: 'header header header' '. main .' 'footer footer footer';

    @media all and (max-width: 500px) {
        grid-template-columns: auto minmax(auto, 1fr) auto;
        grid-template-areas: 'header header header' '. main .' 'footer footer footer';
    }
`

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

const App: React.FC = () => {
    return (
        <AppStyles className="App">
            <Header />

            <Switch>
                <Route path={ROUTES.HOME} exact component={HomePage} />
                <Route path={ROUTES.LOGIN} exact component={Login} />
                <Route path={ROUTES.REGISTER} exact component={Register} />

                <Route component={NotFound} />
            </Switch>

            <Footer />
        </AppStyles>
    )
}

export default App
