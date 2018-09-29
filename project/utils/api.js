import { config } from '../config.js';

const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效，请前往www.7yue.pro申请',
  3000: '期刊不存在'
};

class API {
  request(params){
    const { appkey, api_base_url } = config;
    wx.request({
      url: `${api_base_url}${params.url}`,
      data: params.data,
      header: {
        appkey: appkey,
        'content-type': 'application/json'
      },
      method: params.method || 'GET',
      success: (res)=>{
        let code = res.statusCode.toString();
        if (code.startsWith('2')){
          params.success(res.data);
        }else {
          const error_code = res.data.error_code;
          this._showError(error_code)
        }
      },
      fail: (err)=>{
        this._showError(1);
      }
    })
  }

  _showError(error_code){
    if (!error_code) {
      error_code = 1;
    }

    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    });
  }
}

const api = new API;
export { api };