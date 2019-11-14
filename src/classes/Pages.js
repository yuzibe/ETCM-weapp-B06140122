import Cloud from 'Cloud'

export default class Pages {

  static async req(reqType, url, userType, data) {
    return await new Promise((handleRes, handleErr) => {
      Cloud.pagesUrl(reqType, url, userType, data, handleRes, handleErr)
    }).then((res) => {
      return res.result
    })
  }


}