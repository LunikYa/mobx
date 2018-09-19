import { observable } from 'mobx'
import CountriesStore from './CountriesStore'

export default class AppStore {
  @observable countriesStore = new CountriesStore()
}