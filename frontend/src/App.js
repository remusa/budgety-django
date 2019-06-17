import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import 'normalize.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import Register from './components/Register'
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

const NotFound = () => (
    <div>
        <h1>404, Not Found!</h1>
    </div>
)

const App = () => (
    <AppStyles className='App'>
        <Header />

        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route component={NotFound} />
        </Switch>

        <Footer />
    </AppStyles>
)

export default App
