import * as React from 'react'
import Home from './pages/Home'
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'
import GoogleMapSetup from './components/GoogleMapSetup'

@observer
export default class App extends React.Component<{ store: any }, {}> {
  render() {
    const { store } = this.props
    return (
      <div>
        <GoogleMapSetup store={store.mapStore} countriesStore={store.countriesStore}/>
        <Home countriesStore={store.countriesStore} mapStore={store.mapStore} />
        {/* <DevTools /> */}
      </div>
    )
  }
}