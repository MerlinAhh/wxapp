// pages/index/contact.js
var app = new getApp
var sliderWidth = 40; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["好友", "群聊", "设备", "通讯录", "公众号"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,


    friends: [ ]
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
    var friends = [
      { id: 1, GroupName: '特别关注', online: 1, all: 1,
        list:[
          { header: '/assets/img/header.png', name: '傻子', isonline: 1, sign: '活着!' }
      ] },
      { id: 2, GroupName: '单子-P图的财主', online: 3, all: 20,
        list:[
          { header: '/assets/img/header.png', name: '啊哈', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 1, sign: '活着!' },
          { header: '/assets/img/header.png', name: '张三', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '李四', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '嗯哼', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '吴欢欢', isonline: 0, sign: '活着!' }
      ] },
      { id: 2, GroupName: '旧交', online: 5, all: 200,
        list: [
          { header: '/assets/img/header.png', name: '啊哈', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 1, sign: '活着!' },
          { header: '/assets/img/header.png', name: '张三', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '李四', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '嗯哼', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '吴欢欢', isonline: 0, sign: '活着!' }
      ] },
      { id: 3, GroupName: '新友', online: 102, all: 320,
        list: [
          { header: '/assets/img/header.png', name: '啊哈', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 1, sign: '活着!' },
          { header: '/assets/img/header.png', name: '张三', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '李四', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '嗯哼', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '吴欢欢', isonline: 0, sign: '活着!' }
      ] },
      { id: 4, GroupName: 'haha', online: 9, all: 50,
        list: [
          { header: '/assets/img/header.png', name: '啊哈', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 1, sign: '活着!' },
          { header: '/assets/img/header.png', name: '张三', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '李四', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '嗯哼', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '吴欢欢', isonline: 0, sign: '活着!' }
      ] },
      { id: 5, GroupName: '前端大牛', online: 10, all: 400,
        list: [
          { header: '/assets/img/header.png', name: '啊哈', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 1, sign: '活着!' },
          { header: '/assets/img/header.png', name: '张三', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '李四', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '嗯哼', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '吴欢欢', isonline: 0, sign: '活着!' }
      ] },
      { id: 6, GroupName: '开发资源', online: 15, all: 80,
        list: [
          { header: '/assets/img/header.png', name: '啊哈', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 1, sign: '活着!' },
          { header: '/assets/img/header.png', name: '张三', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '李四', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '嗯哼', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '周岩', isonline: 0, sign: '活着!' },
          { header: '/assets/img/header.png', name: '吴欢欢', isonline: 0, sign: '活着!' }
      ] }
    ]
    var friendGroup = []
    for(var i = 0; i<friends.length; i++){
      friendGroup.push(false)
    }
    this.setData({
      friends: friends,
      friendGroup: friendGroup
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  onReady: function () {
    this.search = this.selectComponent("#search");
    this.navbar_top = this.selectComponent("#navbar-top");
    this.navbar_top.isBack('联系人')
  },
  friendGroup: function(e){
    console.log(e.currentTarget.dataset.id)
    var friendGroup = []
    for (var i = 0; i < this.data.friendGroup.length; i++){
      if (i == e.currentTarget.dataset.id){
        friendGroup[i] = !this.data.friendGroup[i]
      } else {
        friendGroup[i] = false 
      }
    }
    this.setData({
      friendGroup: friendGroup
    })
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
  }
})