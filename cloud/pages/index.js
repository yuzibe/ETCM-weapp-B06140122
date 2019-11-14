const cloud = require('wx-server-sdk')

cloud.init({
  env: 'test-haqueo'
})

const db = cloud.database()
const pagesCollection = db.collection('c13ee_pages')

exports.main = async(data, context) => {

  if (data.route == 'get') {
    /* index pages data */
    if (data.url == 'index' && data.user.type == 'Students') {
      const res = await pagesCollection.where({
        url: data.url,
        userType: data.userType
      }).get()
      /* fail */
      if (res.data.length == 0) {
        return {
          status: 500,
          msg: '未知错误',
          data: {
            pagesStatus: null
          }
        }
      }
      /* succ */
      if (res.data.length == 1) {
        return {
          status: 200,
          code: 20004,
          msg: '请求首页成功',
          data: {
            pagesStatus: res.data[0].pagesStatus
          }
        }
      }
    }
  }

  if (data.route == 'update') {
    /* index pages data */
    if (data.url == 'index') {
      await pagesCollection.where({
        url: data.url
      }).update({
        data: {
          ...data
        },
      })
      return {
        status: 200,
        code: 20003,
        msg: '更新首页成功',
        data: {
          pagesStatus: {
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
            }]
          }
        }
      }
    }
  }

  if (data.route == 'test') {
    await pagesCollection.where({
      url: 'index'
    }).update({
      data: {}
    })
    return {
      res: 'succ'
    }
  }
}