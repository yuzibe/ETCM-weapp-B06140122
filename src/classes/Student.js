import User from 'User'


export default class Student {

  constructor(student = {
    username: null,
    pass: null,
    type: 'Students',
    sid: null
  }) {
    this.username = student.username
    this.pass = student.pass
    this.type = student.type
    this.sid = student.sid
  }
}