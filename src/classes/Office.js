import User from 'User'


export default class Office {

  constructor(office = {
    number: '',
    name: '',
    oid: '',
  }) {
    this.number = office.number
    this.name = office.name
    this.oid = office.oid
  }

}