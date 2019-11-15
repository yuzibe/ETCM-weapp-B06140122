import User from 'User'


export default class Teacher {

  constructor(teacher = {
    phone: '',
    email: '',
    realName: '',
    tid: ''
  }) {
    this.phone = teacher.phone
    this.email = teacher.email
    this.realName = teacher.realName
    this.tid = teacher.tid
  }

}