// components/navbar/navbar-top.js
var app = new getApp
var navH = app.globalData.navH
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    navH: navH,
    pull: 0,
    pushH: 20,

    isBack: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    isPullEnd: function () {        // 请求结束
      this.setData({
        pushH: 20,
        pushdelay: '.2s',
        pull: 3
      })
    },
    // 顶部nav
    isBack: function (title) {
      this.setData({
        navtit: title
      })
      console.log('顶部')
      var pages = getCurrentPages()    //获取加载的页面
      console.log(pages)
      var currentPage = pages[pages.length - 1]    //获取当前页面的对象
      var url = currentPage.route    //当前页面url
      var options = currentPage.options    //如果要获取url中所带的参数可以查看options
      if (pages.length > 1) {
        this.setData({
          isBack: true
        })
      } else {
        this.setData({
          isBack: false
        })
      }
    },
    backTo: function (e) {
      wx.navigateBack({
        delta: 1,
      })
    },
    backTop: function (e) {
      console.log('top', e)
    },
    // 下拉加载
    touchmove: function (event) {
      let currentX = event.touches[0].pageX
      let currentY = event.touches[0].pageY

      if ((currentY - this.data.lastY) < 0) {
      } else if (((currentY - this.data.lastY) > 0)) {
        if ((currentY - this.data.lastY) / 4 <= app.globalData.navH) {
          this.setData({
            pushH: (currentY - this.data.lastY) / 4,
            pull: 0
          })
          console.log('👇 下拉刷新', this.data.pushH)
        } else {
          this.setData({
            pushH: app.globalData.navH,
            pull: 1
          })
          console.log('👆 释放立即刷新', this.data.pushH)
        }
      }
    },
    touchstart: function (event) {
      let currentX = event.touches[0].pageX
      let currentY = event.touches[0].pageY
      this.setData({
        lastX: event.touches[0].pageX,
        lastY: event.touches[0].pageY,
        pull: 0,
        ispull: true,
      })
    },
    touchend: function (event) {
      var that = this
      let currentY = event.changedTouches[0].pageY
      this.setData({
        ispull: false
      })
      if ((currentY - this.data.lastY) >= app.globalData.navH * 4) {
        that.setData({
          pull: 2
        })
        // 请求
      } else {
        that.setData({
          pushH: 20,
          pushdelay: ''
        })
      }
    }
  }
})
