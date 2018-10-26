import { API } from '../utils/api.js';

class ClassicModel extends API {
  getLatest(callBack){
    this.request({
      url: '/classic/latest',
      success:(res)=>{
        callBack(res);
      }
    });
  }
  getPrevious(callBack, index){
    this.request({
      url: `/classic/${index}/previous`,
      success:(res)=>{
        callBack(res);
      }
    });
  }
  isFirst(index){
    return index == 1 ? true : false;
  }
  isLatest(index){
    
  }
}

export { ClassicModel };