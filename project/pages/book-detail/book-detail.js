// pages/book-detail/book-detail.js

import { BookModel } from '../../models/bookModel';
import { LikeModel } from '../../models/likeModel';

const bookModel = new BookModel;
const likeModel = new LikeModel;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments:[],
    bookDetail: null,
    likeStatus: false,
    likeCount: 0,
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading();
    const { id }     = options;
    const comment    = bookModel.getComment(id);
    const bookDetail = bookModel.getBookDetail(id);
    const likeStatus = bookModel.getLikeStatus(id);

    Promise.all([comment, bookDetail, likeStatus]).then(res=>{
      this.setData({
        comments: res[0],
        bookDetail: res[1],
        likeCount: res[2].fav_nums,
        likeStatus: res[2].like_status
      });

      wx.hideLoading();
    });
  },

  onPost(event){
    let comment = event.detail.text || event.detail.value || '';
    comment = comment.trim();
    
    if (!comment || comment&&comment.length > 12) {
      wx.showToast({
        title: !comment ? '短评内容不能为空' : '短评最多12个字',
        icon: 'none'
      });
      return;
    }

    bookModel.postComment(this.data.bookDetail.id, comment).then(()=>{
      wx.showToast({
        title: '+1',
        icon: 'none'
      });

      this.data.comments.unshift({
        content: comment,
        nums: 1
      });

      this.setData({
        posting: false,
        comments: this.data.comments
      });
    });
  },

  onLike(event){
    const like_or_cancel = event.detail.behavior;
    likeModel.like(like_or_cancel, this.data.bookDetail.id, 400);
  },

  onFakePost(){
    this.setData({
      posting: true
    });
  },

  onCancel(){
    this.setData({
      posting: false
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

  // 东西很好没瑕疵，性价比高
  // 做工比较精细还不错
})