export function tryJSONparse(obj: any) {
  console.log('OOOBJS', obj)
  let result
  try {
    result = JSON.parse(obj)
  } catch (error) {
    console.log(`JSON.parse failed`, error)
  } finally {
    return result
  }
}