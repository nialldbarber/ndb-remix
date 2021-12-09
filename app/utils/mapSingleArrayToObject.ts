/**
 * Given an array with _one_ object, this will return
 * the object
 */
export function mapSingleArrayToObject(data: Array<any>) {
  let obj: Record<string, string> = {};
  for (const item of data) {
    for (const key in item) {
      obj[key] = item[key];
    }
  }
  return obj;
}
