const cloud = require('wx-server-sdk')

cloud.init({
  env: 'test-haqueo'
})

const db = cloud.database()
const passportCollection = db.collection('c13ee_passport')

exports.main = async(data, context) => {

  /* passport registe */
  if (data.route == 'registe') {
    const legalCheck = await passportCollection.where({
      user: {
        username: data.user.username,
      }
    }).get()
    if (legalCheck.data.length == 0) {
      await passportCollection.add({
        data: {
          user: data.user
        }
      })
      const res = await passportCollection.where({
        user: {
          username: data.user.username,
        }
      }).get()
      return (res.data[0] != null) ? {
        status: 200,
        code: 20001,
        msg: '注册成功',
        data: res.data[0]
      } : {
        status: 500,
        msg: '未知错误',
        data: res.data[0]
      }
    } else {
      return {
        status: 200,
        code: 10001,
        msg: '用户名已被注册',
        data: {
          user: null
        }
      }
    }
  }

  /* passport login */
  if (data.route == 'login') {

    /* check username and password */
    const res = await passportCollection.where({
      user: {
        username: data.user.username,
        pass: data.user.pass,
      }
    }).get()


    if (res.data.length == 0) {
      return {
        status: 200,
        code: 10000,
        msg: '登录失败，检查账号和密码',
        data: {
          user: null
        }
      }
    }


    /* return passport */
    if (res.data.length == 1) {
      return {
        status: 200,
        code: 20000,
        msg: '登录成功',
        data: res.data[0]
      }
    }
  }

  /* passport update */
  if (data.route == 'update') {
    if (data.type == 'Students') {
      return await passportCollection.where({
        user: {
          username: data.user.username,
        }
      }).update({
        data: {
          student: {
            realName: data.realName,
            sid: data.sid
          },
          user: {
            ...data.user,
            type: data.type
          }
        },
      })
    }
  }

  /* passport get */
  if (data.route == 'get') {

    /* check username and password */
    const res = await passportCollection.where({
      _id: data.uid,
    }).get()

    if (res.data.length == 0) {
      return {
        status: 500,
        code: 10002,
        msg: '云函数 passport ->(route) get err',
        data: {
          user: null
        }
      }
    }

    /* return passport */
    if (res.data.length == 1) {
      return {
        status: 200,
        code: 20000,
        msg: '登录成功',
        data: res.data[0]
      }
    }
  }
}