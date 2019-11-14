import Api from 'Api'

export default class Cloud {

  static passportUrl(route, data, handleRes, handleErr) {
    const mutiData = {
      ...data,
      route: route,
    }
    wx.cloud.callFunction({
      name: Api.passport.name,
      data: mutiData,
      success: (res) => handleRes(res),
      fail: (err) => handleErr(err),
    })
  }

  static pagesUrl(route, url, userType, data, handleRes, handleErr) {
    const mutiData = {
      ...data,
      route: route,
      url: url,
      userType: userType
    }
    wx.cloud.callFunction({
      name: Api.pages.name,
      data: mutiData,
      success: (res) => handleRes(res),
      fail: (err) => handleErr(err),
    })
  }

}