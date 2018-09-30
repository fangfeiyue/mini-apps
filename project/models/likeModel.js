import { API } from '../utils/api.js';

class LikeModel extends API {
  like(behavior, artID, category){
    let url = behavior=='like' ? '/like' : '/like/cancel';
  
    this.request({
      url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      }
    });
  }
}

export { LikeModel };

