import { 
  API
} from '../utils/apiByPromise';

class BookModel extends API {
  getBookHotList(){
    return this.request({
      url: '/book/hot_list'
    });
  }
}

export { BookModel };