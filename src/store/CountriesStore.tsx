import { observable, action } from 'mobx'
import { Call } from '../helpers/api'

const countriesUrl = 'https://raw.githubusercontent.com/meMo-Minsk/all-countries-and-cities-json/master/countries.min.json'

export default class CountriesStore {
  @observable countries: any = []
  @observable status: string = "pending"

  resetTest() {
    this.countries = []
  }
  @action fetchCountries() {
    Call(countriesUrl, 'GET', null).then(
      (data: Object) => {
        this.countries = Object.keys(data)
        this.status = 'done'
      },
      error => {
        console.log('Error', error)
        this.status = 'error'
      }
    )
  }
}