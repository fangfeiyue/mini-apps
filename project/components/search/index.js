// components/search/index.js
import { 
  BookModel
} from '../../models/bookModel';
import { 
  KeywordModel
} from '../../models/keywordModel';
import { 
  paginationBev
} from '../behaviors/pagination';

const keyword   = new KeywordModel;
const bookModel = new BookModel;

Component({
  behaviors: [paginationBev],
  /**
   * 组件的属性列表
   */
  properties: {
    more: {
      type: String,
      value: '',
      observer: '_loadMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hotWord: [],
    inputVal: '',
    // booksArray: [],
    historyWord: [],
    searching: false,
    loading: false
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
    _loadMore(){
      if (!this.data.inputVal || this.data.booksArray.length<=0 || this.data.loading) return;
      if (this.hasMore()){
        this.data.loading = true;
        bookModel.search(this.getCurrStart(), this.data.inputVal).then(res => {
          this.setMoreData(res.books);
          this.setTotal(res.total);
          this.data.loading = false;
        });
      }
    },
    onCancel(){
      this.triggerEvent('cancel', {}, {});
    },
    onDelete(event){
      this.setData({
        searching: false
      });
    },
    onConfirm(event){
      const searchContent = event.detail.value || event.detail.text;
      this.setData({
        searching: true
      });

      bookModel.search(0, searchContent).then(res=>{
        this.setMoreData(res.books);
        this.setTotal(res.total);

        this.setData({
          inputVal: searchContent
        });
        keyword.addToHistory(searchContent);
      });
    }
  }
})
