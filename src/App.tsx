import * as React from 'react'
import Home from './pages/Home'
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'

interface store {
  countriesStore: Object
}
@observer
export default class App extends React.Component<{ store: any }, {}> {
  render() {
    const { store } = this.props
    return ( 
      <div>
        <Home countriesStore={store.countriesStore}/>
        {/* <DevTools /> */}
      </div>
    )
  }
}