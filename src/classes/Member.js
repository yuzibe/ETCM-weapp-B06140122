import User from 'User'


export default class Member {

  constructor(member = {
    phone: '',
    email: '',
  }) {
    this.phone = member.phone
    this.email = member.email
  }

}