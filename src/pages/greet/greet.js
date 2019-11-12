// src/pages/greet/greet.js
import User from '../../classes/User'
import Student from '../../classes/Student'

Page({


  data: {
    student: {
      sid: ''
    },
    index: null,
    picker: ['学生 Student', '教师 Teacher'],
  },

  onLoad(options) {

  },

  pagePickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  pageToIndex() {
    if (this.data.picker[this.data.index] == '学生 Student') {

      const user = new User(wx.getStorageSync('user'))
      user.update('Students')

      const student = new Student({
        ...wx.getStorageSync('user'),
        type: 'Students',
        sid: this.data.student.sid
      })

      wx.removeStorageSync('user')
      wx.setStorageSync('student', student)




    }
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
  studentSidInput(e) {
    this.setData({
      student: {
        sid: e.detail.value
      }
    })
  }
})