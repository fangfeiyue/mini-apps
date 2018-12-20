import { API } from '../utils/apiByPromise';

class KeywordModel extends API {
  key = 'q';
  maxLength = 10;

  getHistory(){
    return wx.getStorageSync(this.key) || [];
  }

  getHot(){
    return this.request({
      url: '/book/hot_keyword'
    });
  }

  addToHistory(keyword){
    const historySearch = this.getHistory();
    const has = historySearch.includes(keyword);

    if (!has){

      if (historySearch.length >= this.maxLength){
        historySearch.pop();
      }

      historySearch.unshift(keyword);
      wx.setStorageSync(this.key, historySearch);
    }
  }
}

export { KeywordModel };
