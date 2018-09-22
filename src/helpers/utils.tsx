export function tryJSONparse(obj: any): object {
  try {
    return JSON.parse(obj)
  } catch (error) {
    console.log(`JSON.parse failed`, error)
  }
}

export function capitalizeFirstLetter(str: string): string {
  return str ? `${str[0].toUpperCase()}${str.slice(1)}` : ''
}

export function getOptionsList(list: Array<string>): Object {
  return list.map(item => {
    return {
      name: capitalizeFirstLetter(item),
      value: item
    }
  })
}