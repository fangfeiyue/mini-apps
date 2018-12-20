class KeywordModel {
  key = 'q';
  maxLength = 10;

  getHistory(){
    return wx.getStorageSync(this.key) || [];
  }

  getHot(){

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
