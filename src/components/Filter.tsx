import * as React from 'react'
// import { observer } from 'mobx-react'

export default class Filter extends React.Component<{list: any[], callBack: any}, {}> {
  handleInput = (event: any) => {
    const { callBack } = this.props
    const value = event.target.value
    const filtredList = this.filter(value)
    if (callBack) {
      callBack(filtredList)
    }
  }
  filter = (value: string): string[] => {
    const { list } = this.props
    const result = list.filter(item =>
      item.value.toLowerCase().indexOf(value.toLowerCase()) === 0
    )
    return result
  }
  render() {
    return <input type="text" placeholder="Search" onInput={this.handleInput} className="default-input"/>
  }
}