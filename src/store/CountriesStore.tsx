import { observable, action, computed } from 'mobx'
import { Call } from '../helpers/api'
import { getOptionsList } from '../helpers/utils'

const countriesUrl = 'https://raw.githubusercontent.com/meMo-Minsk/all-countries-and-cities-json/master/countries.min.json'

export default class CountriesStore {
  @observable countriesData: any = {}
  @observable choosedCountry: string = ''
  @observable status: string = 'pending'

  @computed get countriesList() {
    return getOptionsList(Object.keys(this.countriesData))
  }

  @computed get citiesList() {
    const country = this.countriesData[this.choosedCountry]
    return country ? getOptionsList(country) : []
  }
  @action fetchCountries() {
    Call(countriesUrl, 'GET', null).then(
      (data: Object) => {
        this.countriesData = data
        this.choosedCountry = Object.keys(data)[0]
        this.status = 'done'
      },
      error => {
        console.log('Error', error)
        this.status = 'error'
      }
    )
  }  
}