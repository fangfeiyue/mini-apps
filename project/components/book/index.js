// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: Object
  },
  
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBookDetail(){
      wx.navigateTo({
        url: '../../pages/book-detail/book-detail?id=' + this.properties.book.id,
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }
  }
})
