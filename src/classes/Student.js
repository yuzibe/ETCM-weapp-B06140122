import User from 'User'


export default class Student {

  constructor(student = {
    sid: "",
    realName: "",
  }) {
    this.sid = student.sid
    this.realName = student.realName
  }
}