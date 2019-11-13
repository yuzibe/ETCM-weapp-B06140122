import Cloud from 'Cloud'

export default class User {

  constructor(user = {
    username: null,
    pass: null,
    type: 'Tourists'
  }) {
    this.username = user.username
    this.pass = user.pass
    this.type = user.type
  }

  async login() {
    return await User.loginService(this).then((res) => {
      console.info(res.result)
      return res.result
    }, (err) => {
      console.error(err)
    })
  }

  async registe() {
    return await User.registeService(this).then((res) => {
      console.info(res.result)
      return res.result
    }, (err) => {
      console.error(err)
    })
  }

  static async getByid(uid) {
    return await new Promise((handleRes, handleErr) => {
      Cloud.passportUrl('get', {
        uid: uid
      }, handleRes, handleErr)
    }).then((res) => {
      return res.result
    })
  }

  async update(type, data) {
    return await new Promise((handleRes, handleErr) => {
      Cloud.passportUrl('update', {
        ...data,
        user: this,
        type: type
      }, handleRes, handleErr)
    }).then((res) => {

    })
  }

  static loginService(user) {
    return new Promise((handleRes, handleErr) => {
      Cloud.passportUrl('login', {
        user: user
      }, handleRes, handleErr)
    })
  }

  static registeService(user) {
    return new Promise((handleRes, handleErr) => {
      Cloud.passportUrl('registe', {
        user: user
      }, handleRes, handleErr)
    })
  }

}