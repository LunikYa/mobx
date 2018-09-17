import { observable } from 'mobx'

export default class AppStore {
  @observable test = 0

  resetTest() {
    this.test = 0
  }
  addTest() {
    this.test += this.test
  }
}