// src/pages/greet/greet.js
import User from '../../classes/User'
import Student from '../../classes/Student'

Page({


  data: {
    student: {
      sid: '',
      realName: ''
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

  async pageToIndex() {
    if (this.data.picker[this.data.index] == '学生 Student') {
      const uid = wx.getStorageSync('uid')
      const res = await User.getByid(uid)
      await new User(res.data.user).update('Students', {
        ...this.data.student
      })

      wx.navigateTo({
        url: '/pages/index/index'
      })
    }

  },
  
  studentSidInput(e) {
    this.setData({
      student: {
        ...this.data.student,
        sid: e.detail.value
      }
    })
  },

  studentRealNameInput(e) {
    this.setData({
      student: {
        ...this.data.student,
        realName: e.detail.value
      }
    })
  }
})