// components/search/index.js
import { BookModel } from '../../models/bookModel';
import { KeywordModel } from '../../models/keywordModel';

const keyword   = new KeywordModel;
const bookModel = new BookModel;

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
    hotWord: [],
    booksArray: [],
    historyWord: [],
    searching: false
  },

  attached(){
    this.setData({
      historyWord: keyword.getHistory()
    });

    keyword.getHot().then(res => this.setData({
      hotWord: res.hot
    }));
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(){
      this.triggerEvent('cancel', {}, {});
    },
    
    onConfirm(event){
      const searchVal = event.detail.value;

      this.setData({
        searching: true
      });

      bookModel.search(0, searchVal).then(res=>{
        this.setData({
          booksArray: res.books
        });
        keyword.addToHistory(searchVal);
      });
    }
  }
})
