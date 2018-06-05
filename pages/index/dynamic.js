// pages/index/dynamic.js
var app = new getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: [
      { tit: '好友动态', img: '/assets/icon/dynamic.png' },
      { tit: '附近', img: '/assets/icon/sitemap.png' },
      { tit: '兴趣部落', img: '/assets/icon/buluo.png' },
    ],
    list: [
      { tit: '校园圈', icon: '/assets/icon/xiaoyuanquan_32.png' },
      { tit: '日迹', icon: '/assets/icon/riji_32.png' },
      { tit: '音乐', icon: '/assets/icon/music_32.png' },
      { tit: '直播', icon: '/assets/icon/zhibo_32.png' }
    ]
  },
  onReady: function () {
    this.search = this.selectComponent("#search");
    this.navbar_top = this.selectComponent("#navbar-top");

    this.search.searchin('大家都在搜：哈哈哈')
    this.navbar_top.isBack('动 态')
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

  gointo: function(e){
    console.log(e)
    if (e.currentTarget.dataset.id == 0) {

    } else if (e.currentTarget.dataset.id == 1) {

    } else if (e.currentTarget.dataset.id == 2) {
      wx.navigateTo({
        url: '/pages/dynamic/music'
      })
    } else if (e.currentTarget.dataset.id == 3) {

    }
  }
})