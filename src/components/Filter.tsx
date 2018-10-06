import * as React from 'react'
// import { observer } from 'mobx-react'

export default class Filter extends React.Component<{list: any[], doOnInput: any}, {}> {
  handleInput = (event: any) => {
    const { doOnInput } = this.props
    const value = event.target.value
    if (doOnInput) {
      doOnInput(value)
    }
  }
  render() {
    return <input type="text" placeholder="Search" onInput={this.handleInput} className="default-input"/>
  }
}