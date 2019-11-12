import Api from 'Api'

export default class Cloud {
  static db = wx.cloud.database()

  static passportUrl(url, user, handleRes, handleErr) {
    const data = {
      url: url,
      user: user
    }
    wx.cloud.callFunction({
      name: Api.passport.name,
      data: data,
      success: (res) => handleRes(res),
      fail: (err) => handleErr(err),
    })
  }


}