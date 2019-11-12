// src/pages/passport.js

import User from '../../classes/User.js'

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