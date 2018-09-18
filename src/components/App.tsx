import * as React from 'react'
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'

@observer
export default class App extends React.Component<{ store: Object }, {}> {
  render() {
    const { store } = this.props
    console.log(store)
    return ( 
      <div>
        I work fine
        <DevTools />
      </div>
    )
  }
}