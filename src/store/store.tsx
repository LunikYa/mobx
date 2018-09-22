import { observable } from 'mobx'
import CountriesStore from './CountriesStore'
import MapStore from './MapStore'

export default class AppStore {
  @observable countriesStore = new CountriesStore()
  @observable mapStore = new MapStore()
}