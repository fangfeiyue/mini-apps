import { config } from '../config.js';

const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效，请前往www.7yue.pro申请',
  3000: '期刊不存在'
};

class API {
  request({url, data={}, method="GET"}) {
    return new Promise((resolve, reject)=>{
      this._request(resolve, reject, url, data, method);
    });
  }

  _request(resolve, reject, url = '', data = {}, method = 'GET') {
    const { appkey, api_base_url } = config;
    wx.request({
      url: `${api_base_url}${url}`,
      data,
      header: {
        appkey,
        'content-type': 'application/json'
      },
      method,
      success: (res) => {
        let code = res.statusCode.toString();
        if (code.startsWith('2')) {
          resolve(res.data);
        } else {
          const error_code = res.data.error_code;
          this._showError(error_code);
          reject();
        }
      },
      fail: (err) => {
        this._showError(1);
        reject();
      }
    })
  }

  _showError(error_code) {
    if (!error_code) {
      error_code = 1;
    }

    wx.showToast({
      title: tips[error_code] ? tips[error_code] : tips[1],
      icon: 'none',
      duration: 2000
    });
  }
}

export { API };