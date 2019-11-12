// src/pages/passport.js
Page({
  data: {
    userUsername: '',
    userPass: ''
  },
  onLoad(options) { },
  async loginBtnTap() {
    const waitLoginUser = new User(this.data.userUsername, this.data.userPass)
    const res = await waitLoginUser.login()

    wx.showToast({
      title: res.msg,
      icon: 'success',
      duration: 2000
    })

  },
  async registeBtnTap() {
    const waitRegisteUser = new User(this.data.userUsername, this.data.userPass)
    const res = await waitRegisteUser.registe()

    wx.showToast({
      title: res.msg,
      icon: 'success',
      duration: 2000
    })

  },
  bindUserNameInput(e) {
    this.setData({
      userUsername: e.detail.value
    })
  },
  bindUserPassInput(e) {
    this.setData({
      userPass: e.detail.value
    })
  }
})