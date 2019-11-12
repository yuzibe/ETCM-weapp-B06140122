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
  },
  async userRegisteTap() {
    const user = new User(this.data.user)
    const res = await user.registe()
    wx.setStorageSync('user', res.data.user)
    wx.navigateTo({
      url: '/pages/greet/greet'
    })
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