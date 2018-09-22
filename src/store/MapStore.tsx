import { observable, action, computed } from 'mobx'
import IDS from '../constants/Ids'


export default class mapStore {
  @observable googleMap: any = {}
  @observable mapInfo: any = {}
  @observable geoPosition = {}

  initMap = () => {
    this.setGeolocation()
  }
  createMap = () => {
    this.googleMap = new window.google.maps.Map(document.getElementById(IDS.GOOGLE_MAP_CONTAINER_ID), {
      center: this.geoPosition,
      zoom: 10
    })
  }
  setGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.geoPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.createMap()
      })
    }
  }
  get map() {
    return this.googleMap
  }
  get position() {
    return this.geoPosition
  }
}