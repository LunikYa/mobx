import 'core-js'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './scss/main.scss'

import AppStore from './store/store'
import App from './App'
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
  <AppContainer>
    <App store={new AppStore}/>
  </AppContainer>,
  document.getElementById('root'),
)