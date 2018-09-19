import * as React from 'react'
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'

@observer
export default class App extends React.Component<{}, {}> {
  render() {
    return ( 
      <div className="navbar-wrapper">
        <div className="navbar-inner-wrapper">
          <div className="navbar-logo-icon" />
          <div className="navbar-content-box">
          
          </div>
          <div className="navbar-menu-icon">
          
          </div>
        </div>
      </div>
    )
  }
}