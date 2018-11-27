import { 
  API
} from '../utils/apiByPromise';

class BookModel extends API {
  getBookHotList(){
    return this.request({
      url: '/book/hot_list'
    });
  }

  getMyBookCount(){
    return this.request({
      url: '/book/favor/count'
    });
  }
}

export { BookModel };