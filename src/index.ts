/**
 * 返回url中的参数对象
 */
export function getParamsObj(): any {
  const paramsObj: any = {}
  if (window.location.search) {
    const paramsArr = window.location.search.substr(1).split('&')
    paramsArr.forEach((param) => {
      const paramArr = param.split('=')
      paramsObj[paramArr[0]] = paramArr[1] || null
    })
  }
  return paramsObj
}