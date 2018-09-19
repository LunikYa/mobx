import 'core-js'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './scss/main.scss'

import AppStore from './store/store'
import App from './App'

ReactDOM.render(
  <App store={new AppStore}/>,
  document.getElementById('root')
)