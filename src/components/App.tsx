import * as React from 'react'
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'

@observer
export default class App extends React.Component<{ store: Object }, {}> {
  render() {
    return (
      <div>
        I work fine
        <DevTools />
      </div>
    )
  }
}