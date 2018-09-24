import { observable, action, computed, reaction } from 'mobx'
import { Call } from '../helpers/api'
import { getOptionsList } from '../helpers/utils'

const countriesUrl = 'https://raw.githubusercontent.com/meMo-Minsk/all-countries-and-cities-json/master/countries.min.json'

export default class CountriesStore {
  @observable countriesData: any = {}
  @observable choosedCountry: string = ''
  @observable choosedCity: string = ''
  @observable status: string = 'pending'
  @observable geocoder: any 

  @computed get countriesList() {
    return getOptionsList(Object.keys(this.countriesData))
  }
  @computed get citiesList() {
    const currentCountry = this.choosedCountry
    const citiesList = this.countriesData[currentCountry]
    return citiesList ? getOptionsList(citiesList) : []
  }
  chooseCountry = (store: any, country?: string): void => {
    if (!store) {
      return
    }
    if (country) {
      this.choosedCountry = country
      const city = this.countriesData[country][0]
      this.geocoder = new window.google.maps.Geocoder()
      this.geocoder.geocode( {'address' : city}, (results: any, status: any) => {
        const newCountry = results[0].formatted_address
        // this.choosedCountry = newCountry
        store.map.setCenter(results[0].geometry.location)
      })
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        if (window.google) {
          const pos = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude)
          this.geocoder = new window.google.maps.Geocoder()
          this.geocoder.geocode({ latLng: pos}, (result: any) => {
            this.choosedCountry = result[8].address_components[3].long_name
            this.choosedCity = result[8].address_components[0].long_name
            store.map.setCenter(result[8].geometry.location)
          })
        } else if (!this.choosedCountry && this.countriesData) {
          this.choosedCountry = Object.keys(this.countriesData)[0]
        }
      })
    }
  }
  @action fetchCountries() {
    Call(countriesUrl).then(
      (data: Object) => {
        this.countriesData = data
        this.status = 'done'
      },
      error => {
        console.log('Error', error)
        this.status = 'error'
      }
    )
  }
}