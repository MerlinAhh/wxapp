//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  config: {
    apiBase: 'http://localhost/weicms/index.php?s=/addon/Cms/Cms',
    wsBase: 'ws://192.168.0.117:8080'
  },
  onLaunch: function () {
      qcloud.setLoginUrl(config.service.loginUrl)
        // 登录
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            // console.log(res)
            // 获取用户信息
            wx.getSetting({
              success: res => {
                if (res.authSetting['scope.userInfo']) {
                  // console.log(res)
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                  
                }
              }
            })
          }
        })
        wx.getUserInfo({
          success: res => {
            // console.log(res)
            // 可以将 res 发送给后台解码出 unionId
            this.globalData.userInfo = res.userInfo
 
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }
        })
  },
  globalData: {
    userInfo: null
  },
  setTabbar: function(a,b){
    if(a == 0){
      if(b == 0){
      }else{
        wx.setTabBarBadge({
          index: a,
          text: b
        })
      }
    } else if (a == 1) {
      wx.showTabBarRedDot({
        index: a
      })
    }
  },
  showTabbar: function(){
    wx.showTabBar({
      animation: true
    })
  },
  formatMsgTime(timespan) {
    var times = timespan * 1000
    var dateTime = new Date(times);
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    var now = new Date();
    var now_new = new Date().getTime()        // Date.parse(now.toDateString());  //typescript转换写法
    var milliseconds = 0;
    var timeSpanStr;
    milliseconds = now_new - times;
    if (milliseconds <= 1000 * 60 * 1) {
      timeSpanStr = '刚刚';
    }
    else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
      timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
    }
    else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
      timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
    }
    else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
      timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
    }
    else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
      timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute;
    } else {
      timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    }
    return timeSpanStr;
  }
})