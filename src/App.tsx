import * as React from 'react'
import Home from './pages/Home'
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'

@observer
export default class App extends React.Component<{ store: Object }, {}> {
  render() {
    return ( 
      <div>
        <Home />
        {/* <DevTools /> */}
      </div>
    )
  }
}