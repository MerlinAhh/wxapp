// pages/dynamic/myfriends.js
var app = new getApp

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    iscoverent: false, 
    iscover: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    var items = [
      {
        header: '/assets/img/header.png', name: 'getzoo5', des: '枫叶', time: '', img: [
          'http://pic2.ooopic.com/12/42/25/02bOOOPIC95_1024.jpg'
        ], zan: true, look: 99, zanList: [
          '我是神', '最好的我们', 'φ(>ω<*) 我我我', 'ヾ(๑╹◡╹)ﾉ"', 'Getzoo5'
        ], talk: [ ]
      },
      {
        header: '/assets/img/header.png', name: 'getzoo5', des: '广告走一波~我也不知道啥广告hhhhh...', time: '', img: [
          'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524551242&di=1d1168672520de33b9fcdf814c86952a&src=http://img.zcool.cn/community/012bc0585250e8a801219c77cf3db4.jpg'
        ], zan: false, look: 99, zanList: [
          '我是神', '最好的我们', 'φ(>ω<*) 我我我', 'ヾ(๑╹◡╹)ﾉ"'
        ], talk: [
          [
            { name: '嗯哼', des: '漂亮~' },
            { name: '啊哈', name1: '嗯哼', des: '嗯嗯' }
          ]
        ]
      },
      {
        header: '/assets/img/header.png', name: 'getzoo5', des: '夏天到啦,吃瓜群众表示,是个好季节 (～￣▽￣)～ ', time: '', img: [
          'https://bpic.588ku.com/original_origin_min_pic/18/04/14/18f6b18410219227d0de789148b25647.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/16/06/04/225752e802495fe.jpg!r650'
        ], zan: true, look: 33, zanList: [
          '我是神', 'Getzoo5', '最好的我们', 'φ(>ω<*) 我我我', 'ヾ(๑╹◡╹)ﾉ"'
        ]
      },
      {
        header: '/assets/img/header.png', name: 'getzoo5', des: '这里是本地图...也就意味着点不开ヾ(◍°∇°◍)ﾉﾞ', time: '', img: [
          '/assets/img/header.png', '/assets/img/header.png', '/assets/img/header.png', '/assets/img/header.png'
        ], zan: false, look: 120, zanList: [
          '我是神', '最好的我们', 'φ(>ω<*) 我我我', 'ヾ(๑╹◡╹)ﾉ"'
        ], talk: [ ]
      },
      {
        header: '/assets/img/header.png', name: 'getzoo5', des: '正能量走一波~ fighting~~~', time: '', img: [
          'http://bpic.588ku.com/element_origin_min_pic/00/00/11/16582c2d8f48554.jpg!ww800', 
          'http://bpic.588ku.com/element_origin_min_pic/17/08/09/c4568a19d17b47bac1f01816657adcb5.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/17/05/07/e2f9dccd049e4eca69177efceaed004a.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/17/08/29/bee9e612d4e793c34f5672e7ab12efc2.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/18/03/16/d9b77f40a63179fa6d97ad55adb9cbf1.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/16/11/03/17581b03d3195f6.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/18/03/27/f344c641fe91c8d094e7e86fa60708ab.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/17/01/09/04801685f5e02ee14e9e540d6a7cd720.jpg!r650'
        ], zan: false, look: 95, zanList: [
          '哈哈', 'φ(>ω<*) 我我我', 'ヾ(๑╹◡╹)ﾉ"', '看我', '喵呜', '抛媚眼给你看(^_−)☆'
        ], talk: [
          [
            { name: '嗯哼', des: '可以的, 路在脚下, 梦想出发, 加油~' },
            { name: '嗯哼', name1: '啊哈', des: 'hhh' }
          ],
          [
            { name: '张三', des: '加油, 翻身的咸鱼~' },
            { name: '李四', name1: '张三', des: '加油！！！' }
          ]
        ]
      },
      {
        header: '/assets/img/header.png', name: 'getzoo5', des: '今天心情 hin 美丽~', time: '', img: [
          'http://bpic.588ku.com/element_origin_min_pic/00/00/00/0056938a5cbfc10.jpg!r650'
        ], zan: false, look: 230, zanList: [
          'Get哈哈哈'
        ], talk: [ ]
      },
      {
        header: '/assets/img/header.png', name: 'getzoo5', des: '母亲节素材!!!凑九图~', time: '', img: [
          'https://bpic.588ku.com/original_origin_min_pic/18/03/02/5b092102a06b3907f75c7bc554084070.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/18/04/16/44e72b21f2d1948ccc0f23a8dfe214d6.jpg!r650',
          'http://bpic.588ku.com/element_origin_min_pic/00/00/06/29577386d36526b.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/17/04/29/c8ecc6cb33b60b6e69b5d7e072319bf4.jpg!r650', 
          'https://bpic.588ku.com/original_origin_min_pic/18/04/12/94237a8fcb79eb5b6e438dde7da2ae6e.jpg!r650', 
          'https://bpic.588ku.com/original_origin_min_pic/18/04/12/74264cc680c8cc7cf2b7a5990c85f44c.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/16/05/24/17574421a1a0688.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/18/03/19/874ec4498ee8804422088c0e79d06d14.jpg!r650', 
          'http://bpic.588ku.com/element_origin_min_pic/18/03/31/00336804bcd126b8e33f3726e1ac8b57.jpg!r650'
        ], zan: false, look: 23, zanList: [
          '太阳太阳', 'φ(>ω<*) 我我我', '我啦拉拉', 'ヾ(๑╹◡╹)ﾉ"'
        ], talk: [ ]
      }
    ]
    var iscover = []
    var focus = []
    for(var i= 0; i< items.length ; i++){
      iscover.push(false)
      focus.push(false)
    }
    
    this.setData({
      items: items,
      iscover: iscover,
      focus: focus,
      userInfo: app.globalData.userInfo
    })
    
    wx.getSystemInfo({
      success: function (res) {
        var width = (res.windowWidth-17) / 3
        that.setData({
          imgW: width
        })
      }
    })

    this.search = this.selectComponent("#search");
    this.navbar_top = this.selectComponent("#navbar-top");
    this.navbar_top.isBack('好友动态')

  },
  previewImage: function(e){
    var urllist = this.data.items[e.currentTarget.dataset.id].img
    var url = urllist[e.currentTarget.dataset.index - 0]
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: urllist, // 需要预览的图片http链接列表
      success: function(res){}
    })
  },
  zanBtn: function(e){
    var items = this.data.items
    var zan = !items[e.currentTarget.dataset.id].zan
    var zanList = items[e.currentTarget.dataset.id].zanList
    items[e.currentTarget.dataset.id].zan = zan
    if (zan){
      zanList.push(this.data.userInfo.nickName)
      items[e.currentTarget.dataset.id].zanList = zanList
    } else {
      for (var i = 0; i < items[e.currentTarget.dataset.id].zanList.length; i++){
        if (items[e.currentTarget.dataset.id].zanList[i] == this.data.userInfo.nickName){
          zanList = zanList.splice(i, 1)
        }
      }
    }
    console.log(zanList)
    this.setData({
      items: items
    })
  },
  moreaction: function(e){
    console.log(e.currentTarget.dataset.id)
    var iscover = this.data.iscover
    for(var i= 0; i<iscover.length; i++){
      if (i == e.currentTarget.dataset.id){
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
  bindinputfocus: function(e){
    console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.name)
    console.log(e.currentTarget.dataset.names)
    var focus = this.data.focus
    for (var i = 0; i < focus.length; i++){
      if (e.currentTarget.dataset.id == i){
        focus[i] = true
      } else {
        focus[i] = false
      }
    }
    this.setData({
      focus: focus
    })
  },
  bindinputmessage: function(e){
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
  news:function(){
    wx.navigateTo({
      url: '/pages/look/lookDetail'
    })
  },
  gallery: function(){
    wx.navigateTo({
      url: '/pages/dynamic/mine/gallery'
    })
  }
})