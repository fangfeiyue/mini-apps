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
}

export { ClassicModel };