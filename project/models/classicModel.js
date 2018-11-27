import { API } from '../utils/api.js';

class ClassicModel extends API {
  getLatest(callBack) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        callBack(res);
        this._setLatestIndex(res.index);
        wx.setStorageSync(this._getKey(res.index), res);
      }
    });
  }

  getClassic(callBack, index, nextOrPre) {
    let key = nextOrPre == 'next' ? this._getKey(index + 1) : this._getKey(index - 1);
    let classic = wx.getStorageSync(key);
    if (!classic) {
      this.request({
        url: `/classic/${index}/${nextOrPre}`,
        success: (res) => {
          wx.setStorageSync(key, res);
          callBack(res);
        }
      });
    } else {
      callBack(classic);
    }
  }

  isFirst(index) {
    return index == 1 ? true : false;
  }

  isLatest(index) {
    let latestIndex = this._getLatestIndex();
    return latestIndex == index ? true : false;
  }

  _setLatestIndex(index) {
    wx.setStorageSync('latest', index);
  }

  _getLatestIndex() {
    return wx.getStorageSync('latest');
  }

  _getKey(index) {
    return `classic-${index}`;
  }
}

export { ClassicModel };