import * as React from 'react'
import { render } from 'react-dom';

interface SelectOption {
  value?: string,
  name?: string
}

export default class Select extends React.Component<{options: Array<SelectOption>, doOnChange?: any, value: string}, {}> {
  handleChange = (event: any) => {
    const { doOnChange } = this.props
    if (doOnChange) {
      doOnChange(event.target.value)
    }
  }
  render(){
    const { options, value } = this.props
    return (
      <select name="select" className="select-list" onChange={this.handleChange} value={value}>
        {options.map((item, idx) => 
            <option value={item.value} key={idx}>
              {item.name}
            </option>
          )
        }
      </select>
    )
  }
}