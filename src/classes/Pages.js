import Cloud from 'Cloud'

export default class Pages {

  static async req(reqType, url, user, data) {
    return await new Promise((handleRes, handleErr) => {
      Cloud.pages(reqType, url, user, data, handleRes, handleErr)
    }).then((res) => {
      console.log(res.result)
      return res.result
    })
  }

}