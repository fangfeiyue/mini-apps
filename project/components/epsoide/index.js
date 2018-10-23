// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index1: String,
    index: {
      type: String,
      observer: function(newVal, oldVal, changePath){
        let val = newVal < 10 ? `0${newVal}` : newVal;
        this.setData({
          _index: val
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */ 
  data: {
    year: 0,
    month: '',
    _index: ''
  },

  attached(){
    console.log(this.properties);
    console.log(this.data);
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
