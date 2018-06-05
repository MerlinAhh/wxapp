const app = getApp();
var JMessage = require('../../utils/jmessage-wxapplet-sdk-1.4.0.min.js');
var util = require('../../utils/util.js');

var JIM = new JMessage({
  // debug: true
});
var appkey = '4f7aef34fb361292c566a1cd';
var messagestextList = []
var openid = 'oMoLq4vBSLlEouhiZAOrPu6'
var nickname = '新1'
var header = 'http://www.runoob.com/wp-content/themes/runoob/assets/images/qrcode.png'

var timestamp

var datas = []

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    chatlist: [],

    openid: 'oMoLq4vBSLlEouhiZAOrPu6',    // 我
    header: '',
    loadingHidden: false
  },
  onLoad: function(){
    this.setData({
      loadingHidden: false
    })
  },
  onShow: function (options) {
    var that = this
    // var date = new Date();
    // timestamp = date.getTime();
    // console.log(timestamp)
    // // signature = md5("appkey=" + appkey + "&timestamp=" + timestamp + "&random_str=" + '022cd9fd995849b' + "&key=" + 'fda2339cc093a416654f06d8')
    // // console.log(signature)

    // this.init()

    // this.search = this.selectComponent("#search");
    // this.navbar_top = this.selectComponent("#navbar-top");
    // this.navbar_top.isBack('消 息')
  },
  // 初始化
  init: function () {
    var that = this
    JIM.init({
      "appkey": appkey,
      "random_str": "404",
      "signature": '7db047a67a9d7293850ac69d14cc82bf',
      "timestamp": 1507882399401,
      "flag": 1
    }).onSuccess(function (data) {
      console.log(data)
      that.login(openid)
    }).onFail(function (data) {
      console.log(data)
    });
  },
  // 登陆
  login: function (username) {
    var that = this
    JIM.login({
      'username': username,
      'password': '123456'
    }).onSuccess(function (data) {
      console.log('登陆成功')
      console.log(data)
      that.getConversation()

      // that.onSyncConversation()
      // that.onMsgReceive()
      //聊天消息实时监听
      JIM.onMsgReceive(function (data) {
        console.log(data)
        if (data.messages[0].content.msg_body.text !== '') {
          datas.push(data.messages[0])
          that.setData({
            datas: datas
          })
        }
      });

      //离线消息同步监听
      JIM.onSyncConversation(function (data) {
        console.log(data)
        datas = data[0].msgs
        that.setData({
          datas: datas
        })
      });

      that.getUserInfo(openid)
    }).onFail(function (data) {
      console.log('登陆失败')
      console.log(data)
      if (data.code == 880103) {
        that.register(openid)
        that.login(openid)
      }
    });
  },
  // 聊天消息实时监听
  onMsgReceive: function () {
    var that = this
    JIM.onMsgReceive(function (data) {
      console.log(data)
      if (data.messages[0].content.msg_body.text !== '') {
        datas.push(data.messages[0])
        console.log(datas)
        that.setData({
          datas: datas
        })
      }
    });
  },
  // 离线消息同步监听
  onSyncConversation: function () {
    var that = this
    JIM.onSyncConversation(function (data) {
      console.log(data)
      datas = data[0].msgs
      that.setData({
        datas: datas
      })
    });
  },
  // 退出
  loginOut: function () {
    JIM.loginOut();
  },
  // 打印消息
  appendToMessage: function (text) {
    datas.push(text)
    this.setData({
      datas: datas
    })
  },
  // 获取用户信息
  getUserInfo: function (username) {
    var that = this
    JIM.getUserInfo({
      'username': username
    }).onSuccess(function (data) {
      console.log(data)
      if (data.user_info.extras) {
        if (data.user_info.extras.header) {
          that.setData({
            header: data.user_info.extras.header
          })
        }
      }
    }).onFail(function (data) { });
  },
  // 发送单聊文本
  sendSingleMsg: function () {
    var that = this
    var target_username = that.data.openids;  // 卖家 openids
    var contents = this.data.messagestext;
    console.log(contents)
    JIM.sendSingleMsg({
      'target_username': target_username,
      'appkey': appkey,
      'content': contents,
      'no_offline': false,
      'no_notification': false,
      'need_receipt': true
    }).onSuccess(function (data, msg) {
      console.log(data, msg)
      that.appendToMessage(msg);
      that.setData({
        messageIn: ''
      })
    }).onFail(function (data) { });
  },
  // 获取会话列表 聊天列表
  getConversation: function () {
    var that = this
    JIM.getConversation().onSuccess(function (data) {
      console.log(data)
      var chatlist = []
      var unread_msg_count = 0
      for (var i = 0; i < data.conversations.length; i++) {
        chatlist[i] = { name: '', header: '', des: '', times: '', lis: 0 }
        var times = util.formatTimes(1507882399401, 'h:m')
        chatlist[i].name = data.conversations[i].nickName
        chatlist[i].header = data.conversations[i].extras.header
        chatlist[i].lis = data.conversations[i].unread_msg_count
        chatlist[i].des = '哈哈哈哈'
        chatlist[i].times = times
        chatlist[i].id = data.conversations[i].name
        // { name: '小可爱', header: '/assets/icon/header.jpg', des: '你好呀！', times: '10:25', lis: 1, id: fdsfdfsdfcdscdsfg}
        unread_msg_count += data.conversations[i].unread_msg_count
      }
      that.setData({
        chatlist: chatlist,
        loadingHidden: true
      }) 
      app.setTabbar(0, unread_msg_count)
    }).onFail(function (data) { });
  },
  updateConversation: function () {
    JIM.updateConversation({
      'gid': 23364029,
      'extras': { 'key': 'val', 'is_top': true }
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  chat:function(e){
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: '/pages/chatbox/chat?userId=' + e.currentTarget.dataset.id + '&nickname=' + e.currentTarget.dataset.name
    })
  },
  onPullDownRefresh:function(){
    this.onShow()
    wx.startPullDownRefresh()
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
});