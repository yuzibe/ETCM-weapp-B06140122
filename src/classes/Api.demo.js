import crypt from '../libs/crypt'

export default class Api {

  /* input your project name in here */ 
  static prefix = crypt('').slice(0, 5) + '_'
  static passport = {
    name: Api.prefix + 'passport'
  }
  static pages = {
    name: Api.prefix + 'pages'
  }
}
