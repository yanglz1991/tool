import * as dayjsModel from 'dayjs'
export const dayjs = dayjsModel

/**
 * 返回url中的参数对象
 */
export function getQueryFromUrl(): any {
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


/**
 * 全屏操作
 */
export function fullScreen(dom?: DOMException) {
  const element = document.documentElement || dom
  if (element.requestFullscreen) {
    element.requestFullscreen()
  }
}

/**
 * 退出全屏操作
 */
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  }
}

/**
 * 是否是全屏状态
 */
export function isFullScreen(dom?: DOMException) {
  const document = window.document || dom
  const isFull = !!(document.fullscreenElement)
  return !isFull
}

/**
 * 切换全屏状态
 */
export function changeFullScreenStatus(dom?: DOMException) {
  const isFull = isFullScreen(dom)
  isFull ? exitFullscreen() : fullScreen(dom)
}
