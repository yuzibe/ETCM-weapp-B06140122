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
    return new Promise((handleRes, handleErr) => {
      Cloud.passport('login', {
        user: this
      }, handleRes, handleErr)
    }).then((res) => {
      console.info(res.result)
      return res.result
    }, (err) => {
      console.error(err)
    })
  }

  async registe() {
    return new Promise((handleRes, handleErr) => {
      Cloud.passport('registe', {
        user: this
      }, handleRes, handleErr)
    }).then((res) => {
      console.info(res.result)
      return res.result
    }, (err) => {
      console.error(err)
    })
  }

  static async getByid(uid) {
    return await new Promise((handleRes, handleErr) => {
      Cloud.passport('get', {
        uid: uid
      }, handleRes, handleErr)
    }).then((res) => {
      return res.result
    })
  }

  async update(type, data) {
    return await new Promise((handleRes, handleErr) => {
      Cloud.passport('update', {
        ...data,
        user: this,
        type: type
      }, handleRes, handleErr)
    }).then((res) => {

    })
  }

}