// pages/notice/notice.js
import User from '../../classes/User'
import Pages from '../../classes/Pages'
Page({


  data: {
    pagesStatus: {
      editor: {
        delta: null,
        top: getApp().globalData.CustomBar,
        readOnly: false,
        formats: {},
        editorHeight: 300,
        keyboardHeight: 0,
        isIOS: false
      }
    },
    user: new User(),
  },


  onLoad() {
    this.pageEditorReady()
  },
  pageEditorReady() {
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    this.setData({
      pagesStatus: {
        ...this.data.pagesStatus,
        editor: {
          ...this.data.pagesStatus.editor,
          isIOS: isIOS
        }
      }
    })
    const that = this
    this.pageEditorUpdatePosition(0)
    let keyboardHeight = 0
    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) return
      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success() {
            that.pageEditorUpdatePosition(keyboardHeight)
            that.editorCtx.scrollIntoView()
          }
        })
      }, duration)
    })
    wx.createSelectorQuery().select('#editor').context((res) => {
      this.editorCtx = res.context
    }).exec()
  },
  pageEditorUpdatePosition(keyboardHeight) {
    const toolbarHeight = 50
    const {
      windowHeight,
      platform
    } = wx.getSystemInfoSync()
    let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
    this.setData({
      pagesStatus: {
        ...this.data.pagesStatus,
        editor: {
          ...this.data.pagesStatus.editor,
          editorHeight: editorHeight,
          keyboardHeight: keyboardHeight
        }
      }
    })
  },
  pageEditorFormat(e) {
    let {
      name,
      value
    } = e.target.dataset
    if (!name) return
    this.editorCtx.format(name, value)
  },
  pageEditorStatusChange(e) {
    const formats = e.detail
    this.setData({
      pagesStatus: {
        ...this.data.pagesStatus,
        editor: {
          ...this.data.pagesStatus.editor,
          formats: formats
        }
      }
    })
  },
  pageEditorInsertImage() {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        this.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function() {
            console.log('insert image success')
          }
        })
      }
    })
  },
  async pageEditorSubmit() {
    new Promise((handleRes, handleErr)=>{
      this.editorCtx.getContents({
        success: (res) => {
          handleRes(res)
        }
      })
    }).then((res)=>{
      console.log(res.delta)
      Pages.req('update', 'notice', this.data.user, {
        pagesStatus: {
          editor: {
            delta: res.delta
          }
        }
      })
    })
  },










































  async onShow() {
    const uid = wx.getStorageSync('uid')

    if (uid != null && uid != '') {
      const res = await User.getByid(uid)
      const user = new User(res.data.user)
      this.setData({
        user: user
      })
    }

    await Pages.req('get', 'notice', this.data.user, {}).then((res) => {
      this.setData({
        pagesStatus: {
          ...this.data.pagesStatus,
          ...res.data.pagesStatus,
          editor: {
            ...this.data.pagesStatus.editor,
            readOnly: !this.data.user.type == 'Admin',
          },
        }
      })
    })
  },


})