// pages/index/chat.js
const app = getApp();
var emoj = require('../../utils/emoji.js');
// var JMessage = require('../../utils/jmessage-wxapplet-sdk-1.4.0.min.js');
// var JIM = new JMessage({
//   debug: true
// });
var appkey = '4f7aef34fb361292c566a1cd';
var messagestextList = []
// var openid = 'oMoLq4vBSLlEouhiZAOrPu111116'
var openid = 'oMoLq4vBSLlEouhiZAOrPu6'
var openids = ''
var nickname = '新1'
var header = 'http://www.runoob.com/wp-content/themes/runoob/assets/images/qrcode.png'

var datas = []

Page({
  /**
   * 页面的初始数据
   */
  data: {
    messagestextList: [],
    messagestext: '',
    openid: 'oMoLq4vBSLlEouhiZAOrPu6',    // 买家
    openids: 'oMoLq4lJnRpPcy16cdgObkondQ',    // 卖家
    header: '',
    headers: '',
    
    messageIn: '',

    TOOL_ONE: false,
    TOOL_TWO: false,
    TOOL_THREE: false,
    TOOL_FOUR: false,
    TOOL_FIVE: false,
    TOOL_SIX: false,
    TOOL_SEVEN: false,
    TOOL_EIGHT: false,

    toolH: 0,

    emojL: ['[\u5fae\u7b11][\u6487\u5634][\u8272][\u53d1\u5446][\u5f97\u610f][\u6d41\u6cea][\u5bb3\u7f9e][\u95ed\u5634][\u7761][\u5927\u54ed][\u5c34\u5c2c][\u53d1\u6012][\u8c03\u76ae][\u5472\u7259][\u60ca\u8bb6][\u96be\u8fc7][\u9177][\u51b7\u6c57][\u6293\u72c2][\u5410][\u5077\u7b11][\u6109\u5feb][\u767d\u773c][\u50b2\u6162][\u9965\u997f][\u56f0][\u60ca\u6050][\u6d41\u6c57][\u61a8\u7b11][\u60a0\u95f2][\u594b\u6597][\u5492\u9a82][\u7591\u95ee][\u5618][\u6655][\u75af\u4e86][\u8870][\u9ab7\u9ac5][\u6572\u6253][\u518d\u89c1][\u64e6\u6c57][\u62a0\u9f3b][\u9f13\u638c][\u7cd7\u5927\u4e86][\u574f\u7b11][\u5de6\u54fc\u54fc][\u53f3\u54fc\u54fc][\u54c8\u6b20][\u9119\u89c6][\u59d4\u5c48][\u5feb\u54ed\u4e86][\u9634\u9669][\u4eb2\u4eb2][\u5413][\u53ef\u601c][\u83dc\u5200][\u897f\u74dc][\u5564\u9152][\u7bee\u7403][\u4e52\u4e53][\u5496\u5561][\u996d][\u732a\u5934][\u73ab\u7470][\u51cb\u8c22][\u5634\u5507][\u7231\u5fc3][\u5fc3\u788e][\u86cb\u7cd5][\u95ea\u7535][\u70b8\u5f39][\u5200][\u8db3\u7403][\u74e2\u866b][\u4fbf\u4fbf][\u6708\u4eae][\u592a\u9633][\u793c\u7269][\u62e5\u62b1][\u5f3a][\u5f31][\u63e1\u624b][\u80dc\u5229][\u62b1\u62f3][\u52fe\u5f15][\u62f3\u5934][\u5dee\u52b2][\u7231\u4f60][NO][OK][\u7231\u60c5][\u98de\u543b][\u8df3\u8df3][\u53d1\u6296][\u6004\u706b][\u8f6c\u5708][\u78d5\u5934][\u56de\u5934][\u8df3\u7ef3][\u6295\u964d][\u6fc0\u52a8][\u4e71\u821e][\u732e\u543b][\u5de6\u592a\u6781][\u53f3\u592a\u6781]'],

    tellbox: [
      { img: '/assets/icon/header.jpg' },
      { img: '/assets/icon/header.jpg' },
      { img: '/assets/icon/header.jpg' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      loadingHidden: false
    })
    console.log(options)
    if (options.userId){
      openids = options.userId
      this.setData({
        openids: options.userId,
        nickname: options.nickname
      })
      wx.setNavigationBarTitle({
        title: options.nickname,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    var that = this
    // this.init()
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0,
    })
    
    // this.setData({
    //   'emojiMsg': emoj.emojiAnalysis(this.data.emojL)
    // })
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
  // 注册
  register: function (username) {
    JIM.register({
      'username': username,
      'password': '123456',
      'nickname': nickname,
      'extras': { 'header': header }
    }).onSuccess(function (data) {
      console.log('注册成功:')
      console.log(data)
    }).onFail(function (data) {
      console.log('注册失败:')
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
  //退出
  loginOut: function () {
    JIM.loginOut();
  },
  //打印消息
  appendToMessage: function (text) {
    datas.push(text)
    this.setData({
      datas: datas
    })
  },
  //获取用户信息
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
  //发送单聊文本
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
      for (var i = 0; i < data.conversations.length; i++) {
        if (data.conversations[i].name == that.data.openids) {
          if (data.conversations[i].extras) {
            if (data.conversations[i].extras.header) {
              console.log(data.conversations[i].extras.header)
              // 对话信息 data.conversations
              that.setData({
                headers: data.conversations[i].extras.header
              })
            }
          }
        }
      }

      that.setData({
        loadingHidden: true
      }) 
    }).onFail(function (data) { });
  },
  updateConversation:function (){
    JIM.updateConversation({
      'gid': 23364029,
      'extras': { 'key': 'val', 'is_top': true }
    });
  },
  messagestextIn: function (e) {                                                    // 输入消息
    this.setData({
      messagestext: e.detail.value
    })
  },
  messagestextIntap: function (e) {                                                    // 输入消息
    this.setData({
      TOOL_ONE: false,
      TOOL_TWO: false,
      TOOL_THREE: false,
      TOOL_FOUR: false,
      TOOL_FIVE: false,
      TOOL_SIX: false,
      TOOL_SEVEN: false,
      TOOL_EIGHT: false
    })
  },
  messagestextSubmit: function () {                                                 // 发送消息
    if (this.data.messagestext !== '') {

      // this.sendSingleMsg()
      // this.onMsgReceive()
      this.setData({
        messagestext: ''
      })
    }
  },
  tool: function (e) {                                                              // 工具栏
    console.log(e.currentTarget.dataset.id)
    if (e.currentTarget.dataset.id == 0) {
      this.setData({
        TOOL_ONE: !this.data.TOOL_ONE,
        TOOL_TWO: false,
        TOOL_THREE: false,
        TOOL_FOUR: false,
        TOOL_FIVE: false,
        TOOL_SIX: false,
        TOOL_SEVEN: false,
        TOOL_EIGHT: false
      })
    } else if (e.currentTarget.dataset.id == 1) {
      this.setData({
        TOOL_ONE: false,
        TOOL_TWO: !this.data.TOOL_TWO,
        TOOL_THREE: false,
        TOOL_FOUR: false,
        TOOL_FIVE: false,
        TOOL_SIX: false,
        TOOL_SEVEN: false,
        TOOL_EIGHT: false
      })
    } else if (e.currentTarget.dataset.id == 2) {
      this.setData({
        TOOL_ONE: false,
        TOOL_TWO: false,
        TOOL_THREE: !this.data.TOOL_THREE,
        TOOL_FOUR: false,
        TOOL_FIVE: false,
        TOOL_SIX: false,
        TOOL_SEVEN: false,
        TOOL_EIGHT: false
      })
      this.chooseImg()
    } else if (e.currentTarget.dataset.id == 3) {
      this.setData({
        TOOL_ONE: false,
        TOOL_TWO: false,
        TOOL_THREE: false,
        TOOL_FOUR: !this.data.TOOL_FOUR,
        TOOL_FIVE: false,
        TOOL_SIX: false,
        TOOL_SEVEN: false,
        TOOL_EIGHT: false
      })
    } else if (e.currentTarget.dataset.id == 4) {
      this.setData({
        TOOL_ONE: false,
        TOOL_TWO: false,
        TOOL_THREE: false,
        TOOL_FOUR: false,
        TOOL_FIVE: !this.data.TOOL_FIVE,
        TOOL_SIX: false,
        TOOL_SEVEN: false,
        TOOL_EIGHT: false
      })
    } else if (e.currentTarget.dataset.id == 5) {
      this.setData({
        TOOL_ONE: false,
        TOOL_TWO: false,
        TOOL_THREE: false,
        TOOL_FOUR: false,
        TOOL_FIVE: false,
        TOOL_SIX: !this.data.TOOL_SIX,
        TOOL_SEVEN: false,
        TOOL_EIGHT: false
      })
    } else if (e.currentTarget.dataset.id == 6) {
      this.setData({
        TOOL_ONE: false,
        TOOL_TWO: false,
        TOOL_THREE: false,
        TOOL_FOUR: false,
        TOOL_FIVE: false,
        TOOL_SIX: false,
        TOOL_SEVEN: !this.data.TOOL_SEVEN,
        TOOL_EIGHT: false
      })
    } else if (e.currentTarget.dataset.id == 7) {
      this.setData({
        TOOL_ONE: false,
        TOOL_TWO: false,
        TOOL_THREE: false,
        TOOL_FOUR: false,
        TOOL_FIVE: false,
        TOOL_SIX: false,
        TOOL_SEVEN: false,
        TOOL_EIGHT: !this.data.TOOL_EIGHT
      })
    }
  },
  baseEmoji: function (e) {
    console.log(e.currentTarget.dataset.base)
  },
  chooseImg: function(){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  }
})