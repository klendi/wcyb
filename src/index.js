import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './dist/style.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter } from 'react-router-dom'
import Router from './router/router'
const dotenv = require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Router />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
