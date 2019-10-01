import styled from '@emotion/styled'
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.scss'
import Router from './Router'

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

const App: React.FC = () => {
    return (
        <AppStyles className="App">
            <Header />

            <Router />

            <Footer />
        </AppStyles>
    )
}

export default App
