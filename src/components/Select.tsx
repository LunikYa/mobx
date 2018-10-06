import * as React from 'react'
import Filter from './Filter'

interface SelectOption {
  value?: string,
  name?: string
}

export default class Select extends React.Component<{options: Array<SelectOption>, doOnChange?: any, value: string, filter?: any}, {}> {
  handleChange = (event: any) => {
    const { doOnChange } = this.props
    if (doOnChange) {
      doOnChange(event.target.value)
    }
  }
  handleFilter = (value: any) => {
    const { filter } = this.props
    if (filter) {
      filter(value)
    }
  }
  render(){
    const { options, value } = this.props
    return (
      <div>
        <Filter list={options} doOnInput={this.handleFilter}/>
        <select name="select" className="select-list" onChange={this.handleChange} value={value}>
          {options.map((item, idx) => 
              <option value={item.value} key={idx}>
                {item.name}
              </option>
            )
          }
      </select>
      </div>
      
    )
  }
}