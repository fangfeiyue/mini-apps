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

  getBookDetail(id){
    return this.request({
      url: `/book/${id}/detail`
    });
  }

  getLikeStatus(id){
    return this.request({
      url: `/book/${id}/favor`
    });
  }

  getComment(id){
    return this.request({
      url: `/book/${id}/short_comment`
    });
  }

  postComment(book_id, content){
    return this.request({
      url: `/book/add/short_comment`,
      method: 'POST',
      data: {
        book_id,
        content
      }
    });
  }
}

export { BookModel };