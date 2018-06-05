// pages/dynamic/myfriends.js
var app = new getApp

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        var width = (res.windowWidth - 17) / 3
        that.setData({
          imgW: width
        })
      }
    })

    this.navbar_top = this.selectComponent("#navbar-top");
    this.navbar_top.isBack('好友动态')

  },
  previewImage: function (e) {
    var urllist = this.data.items[e.currentTarget.dataset.id].img
    var url = urllist[e.currentTarget.dataset.index - 0]
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: urllist, // 需要预览的图片http链接列表
      success: function (res) { }
    })
  },
  zanBtn: function (e) {
    var items = this.data.items
    var zan = !items[e.currentTarget.dataset.id].zan
    var zanList = items[e.currentTarget.dataset.id].zanList
    items[e.currentTarget.dataset.id].zan = zan
    if (zan) {
      zanList.push(this.data.userInfo.nickName)
      items[e.currentTarget.dataset.id].zanList = zanList
    } else {
      for (var i = 0; i < items[e.currentTarget.dataset.id].zanList.length; i++) {
        if (items[e.currentTarget.dataset.id].zanList[i] == this.data.userInfo.nickName) {
          zanList = zanList.splice(i, 1)
        }
      }
    }
    console.log(zanList)
    this.setData({
      items: items
    })
  },
  moreaction: function (e) {
    console.log(e.currentTarget.dataset.id)
    var iscover = this.data.iscover
    for (var i = 0; i < iscover.length; i++) {
      if (i == e.currentTarget.dataset.id) {
        iscover[i] = true
      } else {
        iscover[i] = false
      }
    }
    this.setData({
      iscover: iscover,
      iscoverent: true
    })
  },
  isfalse: function () {
    var iscover = this.data.iscover
    for (var i = 0; i < iscover.length; i++) {
      iscover[i] = false
    }
    this.setData({
      iscover: iscover,
      iscoverent: false
    })
  },
  bindinputfocus: function (e) {
    console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.name)
    console.log(e.currentTarget.dataset.names)
    var focus = this.data.focus
    for (var i = 0; i < focus.length; i++) {
      if (e.currentTarget.dataset.id == i) {
        focus[i] = true
      } else {
        focus[i] = false
      }
    }
    this.setData({
      focus: focus
    })
  },
  bindinputmessage: function (e) {
    console.log(e.currentTarget.dataset.id)
    console.log(e.detail.value)
  },

  // 下拉加载
  touchmove: function (event) {
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    if (this.data.lastX <= app.globalData.systemInfo.windowHeight / 2) {
      if (event.touches[0].pageY < app.globalData.systemInfo.windowHeight) {
        this.navbar_top.touchmove(event);
      }
    }
  },
  touchstart: function (event) {
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    if (event.touches[0].pageY < app.globalData.systemInfo.windowHeight / 2) {
      this.setData({
        lastX: event.touches[0].pageX,
        lastY: event.touches[0].pageY
      })
      this.navbar_top.touchstart(event);
    }
  },
  touchend: function (event) {
    var that = this
    if (this.data.lastX <= app.globalData.systemInfo.windowHeight / 2) {
      this.navbar_top.touchend(event);
      setTimeout(function () {   // 请求
        that.navbar_top.isPullEnd();
      }, 2000)
    }
  },
  news: function () {
    wx.navigateTo({
      url: '/pages/look/lookDetail'
    })
  },
  gallery: function () {
    wx.navigateTo({
      url: '/pages/dynamic/mine/gallery'
    })
  }
})