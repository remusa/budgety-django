import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

import '@babel/polyfill'
import AppProviders from './context/AppProviders'

ReactDOM.render(
    <Router>
        {/* <AppProviders> */}
        <App />
        {/* </AppProviders> */}
    </Router>,
    document.getElementById('root')
)
