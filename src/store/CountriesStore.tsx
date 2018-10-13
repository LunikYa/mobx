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
  @observable cityFilter: string = ''
  @observable countryFilter: string = ''

  @computed get countriesList() {
    const result = getOptionsList(Object.keys(this.countriesData)).filter((item: any) => item.value.toLowerCase().indexOf(this.countryFilter.toLowerCase()) === 0)
    // this.choosedCountry = result[0]
    return result
  }
  @computed get citiesList() {
    const citiesList = this.countriesData[this.choosedCountry]
    return citiesList ? getOptionsList(citiesList).filter((item: any) => item.value.toLowerCase().indexOf(this.cityFilter.toLowerCase()) === 0) : []
  }
  setCityFilterValue = (value: string) => {
    this.cityFilter = value
  }
  setCountryFilterValue = (value: string) => {
    this.countryFilter = value
  }
  chooseCountry = (store: any, country?: string): void => {
    if (country) {
      this.choosedCountry = country
      const city = this.countriesData[country][0]
      this.setCity(store, city)
    } else if (navigator.geolocation) {
      this.defineGeolocation()
    }
  }
  setCity = (store: any, city: string) => {
    this.choosedCity = city
    this.geocoder = new window.google.maps.Geocoder()
    this.geocoder.geocode({ address: city }, (results: any, status: any) => {
      store.map.setCenter(results[0].geometry.location)
    })
  }
  defineGeolocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      if (window.google) {
        const pos = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        this.geocoder = new window.google.maps.Geocoder()
        this.geocoder.geocode({ latLng: pos }, (result: any) => {
          this.choosedCountry = result[8].address_components[3].long_name
          this.choosedCity = result[8].address_components[0].long_name
        })
      } else if (!this.choosedCountry && this.countriesData) {
        this.choosedCountry = Object.keys(this.countriesData)[0]
      }
    })
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