// pages/index/contact.js
var sliderWidth = 40; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["好友", "群聊", "设备", "通讯录", "公众号"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,


    friends: [
      { id: 1, GroupName: '特别关注', online: 1, all: 1 },
      { id: 2, GroupName: '单子-P图的财主', online: 3, all: 20 },
      { id: 2, GroupName: '旧交', online: 5, all: 200 },
      { id: 3, GroupName: '新友', online: 102, all: 320 },
      { id: 4, GroupName: 'haha', online: 9, all: 50 },
      { id: 5, GroupName: '前端大牛', online: 10, all: 400 },
      { id: 6, GroupName: '开发资源', online: 15, all: 80 },
    ]
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  onReady: function(){

    this.search = this.selectComponent("#search");
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