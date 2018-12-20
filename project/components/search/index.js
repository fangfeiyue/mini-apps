// components/search/index.js
import { KeywordModel } from '../../models/keywordModel'
const keyword = new KeywordModel;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyKeyword: []
  },

  

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(){
      this.triggerEvent('cancel', {}, {});
    },
    
    onConfirm(event){
      const inputVal = event.detail.value;
      keyword.addToHistory(inputVal);
    }
  }
})
