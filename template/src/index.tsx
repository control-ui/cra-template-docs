import React from 'react'
import ReactDOM from 'react-dom'
import { AppLoader } from '@control-ui/app/AppLoader'
import * as serviceWorker from './serviceWorker'
import { themes } from './theme'

const App = AppLoader(
    {themes},
    () => import('./App'),
    'Loading'
)

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()