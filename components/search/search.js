// search.wxml.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    searchin: '搜索'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    searchin(e) {
      this.setData({
        searchin: e 
      })
    },
    showInput() {
      this.setData({
        inputShowed: true
      });
    },
    hideInput() {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
    },
    clearInput() {
      this.setData({
        inputVal: ""
      });
    },
    inputTyping(e) {
      this.setData({
        inputVal: e.detail.value
      });
    }
  }
})