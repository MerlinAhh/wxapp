// pages/look/lookDetail.js
var app = new getApp
Page({
  data: {
    item: []
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.config.apiBase + '/getDetail/id/' + options.id,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        if (res.statusCode == 200) {
          var str = res.data.content
          var str1 = str.replace(/'↵'/g, '\t')
          res.data.content = str1
          that.setData({
            item: res.data
          })
        }
      }
    })
  },
  zanBtn: function () {
    this.setData({
      zanBtn: !this.data.zanBtn
    })
  },
})