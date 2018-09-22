import * as React from 'react'
import { observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import Select from '../components/Select'
import IDS from '../constants/Ids'

@observer
export default class HomePage extends React.Component<{countriesStore: any}, {}> {
  componentDidMount() {
    const { countriesStore } = this.props
    countriesStore.fetchCountries()
  }
  chooseCountry = (country: string) => {
    const { countriesStore } = this.props
    if (countriesStore.choosedCountry !== country) {
      countriesStore.choosedCountry = country
    }
  }
  render() {
    const { countriesStore } = this.props
    const { countriesList, citiesList } = countriesStore
    return (
      <div>
        <NavBar />
        <Select options={countriesList} doOnChange={this.chooseCountry}/>
        <Select options={citiesList} />
        <div id={IDS.GOOGLE_MAP_CONTAINER_ID}></div>
      </div>
    )
  }
}