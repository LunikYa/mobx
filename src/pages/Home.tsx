import * as React from 'react'
import { observer } from 'mobx-react'

import NavBar from '../components/NavBar'
import Select from '../components/Select'
import IDS from '../constants/Ids'

@observer
export default class HomePage extends React.Component<{countriesStore: any, mapStore?: any}, {}> {
  componentDidMount() {
    const { countriesStore } = this.props
    countriesStore.fetchCountries()
  }    
  chooseCountry = (country: string) => {
    const { countriesStore, mapStore } = this.props
    countriesStore.chooseCountry(mapStore, country)
    // if (countriesStore.chooseCountry !== country) {
    //   countriesStore.choosedCountry = country
    //   console.log()
      // mapStore.map.setCenter(result[8].geometry.location)
    // }
  }
  chooseCity = (city: string) => {
    const { countriesStore, mapStore } = this.props
    countriesStore.setCity(mapStore, city)
  }
  render() {
    const { countriesStore } = this.props
    const { countriesList, citiesList } = countriesStore
    return (
      <div>
        <NavBar />
        <Select options={countriesList} doOnChange={this.chooseCountry} value={countriesStore.choosedCountry}/>
        <Select options={citiesList}  doOnChange={this.chooseCity} value={countriesStore.choosedCity}/>
        <div id={IDS.GOOGLE_MAP_CONTAINER_ID}></div> 
      </div>
    )
  }
}