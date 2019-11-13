import Api from 'Api'

export default class Cloud {

  static passportUrl(url, data, handleRes, handleErr) {
    const mutiData = {
      ...data,
      url: url,
    }
    wx.cloud.callFunction({
      name: Api.passport.name,
      data: mutiData,
      success: (res) => handleRes(res),
      fail: (err) => handleErr(err),
    })
  }

}