import * as React from 'react'
import Filter from './Filter'

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
  handleFilter = (filtredList: any[]) => {
    console.log(filtredList)
  }
  render(){
    const { options, value } = this.props
    return (
      <div>
        <Filter list={options} callBack={this.handleFilter}/>
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