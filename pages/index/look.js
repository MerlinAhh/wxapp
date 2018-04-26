// pages/index/look.js
var app = new getApp
var util = require("./../../utils/util.js")
var sliderWidth = 40; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    items: [],
    lastid: 0,
    moreload: '点击加载更多',
    more: 0
  },
  loadData: function (lastid){
    var limit = 2
    var that = this
    wx.request({
      url: app.config.apiBase + '/getList',
      data: { lastid: lastid, limit: limit },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          if (res.data){
            var item = res.data
            for (var i = 0; i < item.length; i++){
              item[i].cTime = util.getDateDiff(item[i].cTime)
            }
            var items = that.data.items
            items = items.concat(item)
            that.setData({
              items: items,
              lastid: item[item.length - 1].id,
              moreload: '点击加载更多',
              more: 0
            })
          } else {
            that.setData({
              moreload: '真的没有了~',
            })
          }
        }
      }
    })
  },
  onLoad: function () {
    var that = this;
    var res = wx.getSystemInfoSync()
    that.setData({
      items: [],
      imgW: res.windowWidth/9*2
    })
    that.loadData(0)
  },
  onReady: function () {
    this.search = this.selectComponent("#search");
  },
  detail: function(e){
    wx.navigateTo({
      url: '/pages/look/lookDetail?id=' + e.currentTarget.dataset.id
    })
  },
  loadMore:function(e){
    var i = this.data.more
    if(i == 0){
      i ++
      this.setData({
        moreload: '努力加载中...',
        more: i
      })
      this.loadData(e.currentTarget.dataset.lastid)
    }
  },
  onPullDownRefresh: function(){
    this.onLoad(0)
    wx.stopPullDownRefresh()
  },
  showInput() {
    this.search.showInput();
  },
  hideInput() {
    this.search.hideInput();
  },
  clearInput() {
    this.search.clearInput();
  },
  inputTyping(e) {
    this.search.inputTyping();
  }
})