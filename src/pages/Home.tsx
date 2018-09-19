import * as React from 'react'
import { observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import Select from '../components/Select'

interface countriesStore {
  fetchCountries: Function,
  countries: Array<Object>
}
@observer
export default class HomePage extends React.Component<{countriesStore: countriesStore}, {}> {
  componentDidMount() {
    this.props.countriesStore.fetchCountries()
    console.log(this.props)
  }
  render() {
    const { countriesStore } = this.props
    return (
      <div>
        <NavBar />
        <Select options={countriesStore.countries} />
      </div>
    )
  }
}