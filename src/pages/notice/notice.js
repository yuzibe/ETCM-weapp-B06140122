// pages/notice/notice.js
import User from '../../classes/User'
import Pages from '../../classes/Pages'
Page({


  data: {
    pagesStatus: {},
    user: new User()
  },


  async onShow() {
    const uid = wx.getStorageSync('uid')

    if (uid != null && uid != '') {
      const res = await User.getByid(uid)
      const user = new User(res.data.user)
      this.setData({
        user: user
      })
    }

    await Pages.req('get', 'notice', this.data.user, {}).then((res) => {
      this.setData({
        pagesStatus: {
          ...this.data.pagesStatus,
          ...res.data.pagesStatus,
        }
      })
    })
  },


})