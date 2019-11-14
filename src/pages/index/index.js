// src/pages/index/index.js
import User from '../../classes/User'
import Pages from '../../classes/Pages'
Page({


  data: {
    pagesStatus: {
      bgImg: '/images/BasicsBg.png',
      swiperListCur: 0,
      gridCol: 4,
    },
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


    await Pages.req('get', 'index', this.data.user.type, {}).then((res) => {
      this.setData({
        pagesStatus: {
          ...res.data.pagesStatus,
          ...this.data.pagesStatus
        }
      })
      console.log(this.data.pagesStatus)
    })



  },

  onLoad(options) {

  },

  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },

  pageToPassport() {
    wx.navigateTo({
      url: '/pages/passport/passport'
    })
  },

})