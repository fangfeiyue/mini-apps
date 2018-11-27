// components/classic/music/index.js

import { classicBeh } from '../classic-beh';

const mMgr = wx.getBackgroundAudioManager();

Component({
  /**
   * Component properties
   */
  behaviors: [classicBeh],
  properties: {
    src: String
  },

  /**
   * Component initial data
   */
  data: {
    isPlaying: false,
    pauseSrc: './images/player@playing.png',
    playSrc: './images/player@waitting.png'
  },
 
  attached(){
    this._recoverStatus();
    this._monitorSwitch();
  },

  detached(){
    // mMgr.stop();
  },

  /**
   * Component methods
   */
  methods: {
    onPlay(event){
      this.setData({
        isPlaying: !this.data.isPlaying
      });
      this.data.isPlaying ? mMgr.src = this.properties.src : mMgr.pause();
    },
    _recoverStatus(){
      if (mMgr.paused){
        this.setData({
          isPlaying: false
        });
        return;
      }

      if (mMgr.src == this.properties.src){
        this.setData({
          isPlaying: true
        });
      }
    },
    _monitorSwitch(){
      mMgr.onPlay(()=>{
        this._recoverStatus()  
      });
      mMgr.onPause(()=>{
        this._recoverStatus()
      });
      mMgr.onStop(()=>{
        this._recoverStatus()
      });
      mMgr.onEnded(()=>{
        this._recoverStatus()
      });
    }
  }
})
