import { API } from '../utils/api.js';

class ClassicModel extends API {
  getLatest(callBack){
    this.request({
      url: '/classic/latest',
      success:(res)=>{
        callBack(res);
        this._setLatestIndex(res.index);
      }
    });
  }
  
  getClassic(callBack, index, nextOrPre){

    this.request({
      url: `/classic/${index}/${nextOrPre}`,
      success:(res)=>{
        callBack(res);
      }
    });
  }
  
  isFirst(index){
    return index == 1 ? true : false;
  }
  
  isLatest(index){
    let latestIndex = this._getLatestIndex();
    return latestIndex == index ? true : false;
  }
  
  _setLatestIndex(index){
    wx.setStorageSync('latest', index);
  }
  
  _getLatestIndex(){
    return wx.getStorageSync('latest');
  }
}

export { ClassicModel };