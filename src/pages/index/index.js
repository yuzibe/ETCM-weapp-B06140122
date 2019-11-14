// src/pages/index/index.js
import User from '../../classes/User'

Page({


  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }],
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: 'VR'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '录像'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '图像'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '通知'
    }],
    gridCol: 4,
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