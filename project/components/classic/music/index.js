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

  /**
   * Component methods
   */
  methods: {
    onPlay(event){
      this.setData({
        isPlaying: !this.data.isPlaying
      });
      this.data.isPlaying ? mMgr.src = this.properties.src : mMgr.pause();
    }
  }
})
