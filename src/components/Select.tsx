import * as React from 'react'

export default class Select extends React.Component<{options: Array<any>}, {}> {
  render(){
    const { options } = this.props
    return (
      <select name="select" className="select-list">
        {options &&
          options.map((item, idx) => 
            <option key={idx} value={item}>
              {item}
            </option>
          )
        }
      </select>
    )
  }
}