// pages/index/look.js
var app = new getApp
var util = require("./../../utils/util.js")
var sliderWidth = 40; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    items: [],
    lastid: 0,
    moreload: '点击加载更多',
    more: 0,
    pushH: 0
  },
  loadData: function (lastid){
    var limit = 10
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

    this.search = this.selectComponent("#search");
    this.navbar_top = this.selectComponent("#navbar-top");
    this.navbar_top.isBack('看 点')
  },
  onShow: function () {
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

  // 返回
  backTo: function (e) {
    console.log(e)
    this.navbar_top.back(e);
  }
})