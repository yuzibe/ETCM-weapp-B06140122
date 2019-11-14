import Api from 'Api'

export default class Cloud {

  static passport(route, data, handleRes, handleErr) {
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

  static pages(route, url, user, data, handleRes, handleErr) {
    const mutiData = {
      ...data,
      route: route,
      url: url,
      userType: user.type
    }
    wx.cloud.callFunction({
      name: Api.pages.name,
      data: mutiData,
      success: (res) => handleRes(res),
      fail: (err) => handleErr(err),
    })
  }

}