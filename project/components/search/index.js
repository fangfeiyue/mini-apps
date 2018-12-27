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
      observer: 'loadMore'
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
    loading: false,
    loadingCenter: false
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
    loadMore(){
      if (!this.data.inputVal || this.data.booksArray.length<=0 || this._isLocked()) return;
      if (this.hasMore()){
        this._locked();
        bookModel.search(this.getCurrStart(), this.data.inputVal).then(res => {
          this.setMoreData(res.books);
          this.setTotal(res.total);
          this._unLocked();
        }, () => this._unLocked());
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
      this._showResult();
      this._showLoadingCenter();
      this.initialize();
      bookModel.search(0, searchContent).then(res=>{
        this.setMoreData(res.books);
        this.setTotal(res.total);

        this.setData({
          inputVal: searchContent
        });
        keyword.addToHistory(searchContent);
        this._hideLoadingCenter();
      }, () => this._hideLoadingCenter());
    },

    _showLoadingCenter(){
      this.setData({
        loadingCenter: true
      });
    },

    _hideLoadingCenter(){
      this.setData({
        loadingCenter: false
      });
    },

    _showResult(){
      this.setData({
        searching: true
      });
    },

    _closeResult(){
      this.setData({
        searching: false
      });
    },

    _locked(){
      this.setData({
        loading: true
      });
    },

    _unLocked(){
      this.setData({
        loading: false
      });
    },

    _isLocked(){
      return this.data.loading ? true : false;
    }
  }
})
