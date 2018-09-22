import 'core-js'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './scss/main.scss'
import './typing'

import { whyDidYouUpdate } from 'why-did-you-update'

import AppStore from './store/store'
import App from './App'
import { AppContainer } from 'react-hot-loader'

if (process.env.APP_ENV !== 'production') {
  whyDidYouUpdate(React)
}

ReactDOM.render(
  <AppContainer>
    <App store={new AppStore}/>
  </AppContainer>,
  document.getElementById('root'),
)