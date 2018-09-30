// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      // 必填
      type: Boolean,
      // 选填
      value: false,
      // 选填
      observer() {

      }
    },
    count: {
      type: Number,
      value: 0
    }
  },

  /** 
   * 组件的初始数据
   */
  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      let { like, count } = this.properties;
      // 当前的状态是喜欢，点击一下置为不喜欢，所以count要减1
      count = like ? --count : ++count;
      this.setData({
        count,
        like: !like
       });

      let behavior = this.properties.like ? 'like' : 'cancel';
      this.triggerEvent('like', {
        behavior
      }, {});
    }
  }
})
