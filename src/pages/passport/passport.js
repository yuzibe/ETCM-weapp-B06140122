// src/pages/passport.js

import User from '../../classes/User'

Page({
  data: {
    user: new User()
  },
  onLoad(options) {},
  async userLoginTap() {
    const user = new User(this.data.user)
    const res = await user.login()
    /* after use id to do sth. */
    if (res.code = 20000)
      wx.setStorageSync('uid', res.data._id)
  },
  async userRegisteTap() {
    const user = new User(this.data.user)
    const res = await user.registe()
    if (res.code = 20001) {
      wx.setStorageSync('uid', res.data._id)
      wx.navigateTo({
        url: '/pages/greet/greet'
      })
    }
  },
  userUsernameInput(e) {
    this.setData({
      user: {
        ...this.data.user,
        username: e.detail.value
      }
    })
  },
  userPassInput(e) {
    this.setData({
      user: {
        ...this.data.user,
        pass: e.detail.value
      }
    })
  }
})