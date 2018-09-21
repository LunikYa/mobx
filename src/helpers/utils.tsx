export function tryJSONparse(obj: any) {
  try {
    return JSON.parse(obj)
  } catch (error) {
    console.log(`JSON.parse failed`, error)
  }
}

export function capitalizeFirstLetter(str: String) {
  return str ? `${str[0].toUpperCase()}${str.slice(1)}` : ''
}

export function getOptionsList(list: Array<String>) {
  return list.map(item => {
    return {
      name: capitalizeFirstLetter(item),
      value: item
    }
  })
}