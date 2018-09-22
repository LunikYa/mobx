import { tryJSONparse } from './utils'

export function Call(url: string, method?: string, data?: any) {
  return new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest()
    xml.onerror = () => reject(new Error())
    xml.open(method || 'GET', url, true)

    xml.onload = function() {
      if (responseIsOk(this)) {
        resolve(tryJSONparse(this.response))
      } else {
        reject({ status: this.status, message: this.responseText } )
      }
    }
    xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')    
    xml.send(data)
  })
}

export function responseIsOk(response: any) {
  return response && response.status >= 200 && response.status < 400
}
