import Cloud from 'Cloud'

export default class User {

  constructor(username, pass) {
    this.username = username
    this.pass = pass
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

  static loginService(user) {
    return new Promise((handleRes, handleErr) => {
      Cloud.passportUrl('login', user, handleRes, handleErr)
    })
  }

  static registeService(user) {
    return new Promise((handleRes, handleErr) => {
      Cloud.passportUrl('registe', user, handleRes, handleErr)
    })
  }

}