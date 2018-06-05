//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  config: {
    apiBase: 'http://localhost/weicms/index.php?s=/addon/Cms/Cms',
    wsBase: 'ws://192.168.0.117:8080'
    // apiBase: 'http://www.getzoo5.cn/weicms/index.php?s=/addon/Cms/Cms',
    // wsBase: 'ws://120.79.246.18'
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
        var systemInfo = wx.getSystemInfoSync()
        var navH = (systemInfo.screenHeight - systemInfo.windowHeight) / 3 * 4
        this.globalData.navH = navH
        this.globalData.systemInfo = systemInfo
  },
  globalData: {
    userInfo: null,
    systemInfo: null,
    navH: 0
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
  }
})