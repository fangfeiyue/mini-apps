// pages/classic.js
import { ClassicModel } from '../models/classicModel.js';
import { LikeModel } from '../models/likeModel.js';

const classicModel = new ClassicModel;
const likeModel = new LikeModel;

Page({ 

  /**
   * 页面的初始数据
   */
  data: {
    classicData: null,
    latest: true,
    first: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest(res=>{
      this.setData({
        classicData: res
      });
    });
  },
  
  onLike(event){
    console.log(event);
    let behavior = event.detail.behavior;
    const { id, type } = this.data.classicData;
    likeModel.like(behavior, id, type);
  },

  onNext(){
    
  },
 
  onPrevious(){
    let { index } = this.data.classicData;
    classicModel.getPrevious(res=>{
      this.setData({
        classicData: res
      });
    }, index);
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
})