import * as React from 'react'
import { observer } from 'mobx-react'
import IDS from '../constants/Ids'

@observer
export default class GoogleMapSetup extends React.Component<{store: any}, {}> {
  componentDidMount = () => {
    const { store } = this.props
    window.initMap = store.initMap
    const script = document.createElement('script')

    script.type = 'text/javascript'
    script.async = true
    script.defer = true
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_APP}&callback=initMap`

    document.body.appendChild(script)
  }
  render() {
    return ''
  }
}