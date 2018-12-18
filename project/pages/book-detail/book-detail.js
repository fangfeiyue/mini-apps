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
    likeCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options;
    const comment = bookModel.getComment(id);
    const bookDetail = bookModel.getBookDetail(id);
    const likeStatus = bookModel.getLikeStatus(id);

    comment.then(res=>{
      this.setData({
        comments: res.comments
      });
    });

    bookDetail.then(res=>{
      this.setData({
        bookDetail: res
      });
    });

    likeStatus.then(res=>{
      this.setData({
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      });
    });
  },

  onLike(event){
    const like_or_cancel = event.detail.behavior;
    likeModel.like(like_or_cancel, this.data.bookDetail.id, 400);
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