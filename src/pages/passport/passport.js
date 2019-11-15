// src/pages/passport.js

import User from '../../classes/User'

Page({
  data: {
    user: new User()
  },
  async userLoginTap() {
    const user = new User(this.data.user)
    const res = await user.login()
    if (res.code = 20000) {
      wx.setStorageSync('uid', res.data._id)
      wx.navigateTo({
        url: '/pages/index/index'
      })
    }
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