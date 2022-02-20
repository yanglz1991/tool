import { timeLongFromNowToEndTime as timeLongFromNowToEndTimeModule } from './time'

export const timeLongFromNowToEndTime = timeLongFromNowToEndTimeModule
//#region window 相关方法

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

/**
 * 语音合成
 */
export class Speak {
  private synth
  private msg
  constructor(lang?: string) {
    this.synth = window.speechSynthesis
    this.msg = new SpeechSynthesisUtterance()
    this.msg.lang = lang || 'zh-CN'
  }

  say = (text: string): void => {
    this.msg.text = text
    this.synth.speak(this.msg)
  }
}

//#endregion


//#region 校验相关

/**
 * 校验手机号码
 */
export const checkPhone = (number: string | number): boolean => {
  return /^1[3|4|5|6|7|8|9]\d{9}$/.test(String(number))
}

/**
 * 校验邮箱
 */
export const checkEmail = (email: string): boolean => {
  return /^([a-zA-Z0-9]+[_|\_|\.|\-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-|_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/.test(email)
}

//#endregion

//#region 微信小程序相关
declare const wx: any

/**
 * 传入页面url，判断回退到该页面时是否刷新
 */
export function WX_isRefresh(pageUrl: string): boolean {
  const result = wx.getStorageSync(pageUrl)
  if (result) {
    wx.removeStorageSync(pageUrl)
    return result
  } else {
    return false
  }
}

/**
 * 设置回退到指定页面，告诉该页面需要刷新，或者带回去的参数
 */
export function WX_setRefresh(pageUrl: string, value?: any): void {
  wx.setStorageSync(pageUrl, value || true)
}

/**
 * 某项操作之后要跳转的页面就进行跳转，设置要跳转的页面
 */
export function WX_set_jump_page(pageUrl: string) {
  wx.setStorageSync("tool-backUrl", pageUrl);
}

/**
 * 某项操作之后要跳转的页面就进行跳转，跳转之后将缓存清空
 */
export function WX_jump(homePage?: string): void {
  // 如果有登录之后要跳转的页面就进行跳转
  const backUrl = wx.getStorageSync("tool-backUrl");
  if (backUrl) {
    // 小程序页面
    if (backUrl.includes("/pages")) {
      wx.reLaunch({
        url: backUrl,
      });
      // } else {
      // h5
      // wx.reLaunch({
      //   url: "/pages/h5/index?scene=" + backUrl,
      // });
    }
  } else {
    wx.reLaunch({
      url: homePage || '/pages/index/index',
    });
  }
  wx.removeStorageSync("tool-backUrl");
};


//#endregion
