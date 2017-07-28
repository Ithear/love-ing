// pages/subject/subject.js
//获取应用实例
var app = getApp();
Page({
  data: {
    animationData: {},
    cardInfoList: [{
      cardUrl: 'http://dev.wemart.cn/console/images/card/card3.png',
      cardInfo: {
        cardTitle: '浪漫小故事一',
        cardInfoMes: ['5月20号，一个充满惊喜的日子', '我们俩，如同安排好的就在一起了', '浪漫而温馨，有你的感觉真好']
      }
    }, {
      cardUrl: 'http://dev.wemart.cn/console/images/card/card2.png',
      cardInfo: {
        cardTitle: '浪漫小故事二',
        cardInfoMes: ['7月14号,一个非常特别的日子', '地铁里，你哭的像个泪人', '让我的心痛到无法呼吸不知所措']
      }
      }, {
        cardUrl: 'http://dev.wemart.cn/console/images/card/card3.png',
        cardInfo: {
          cardTitle: '浪漫小故事三',
          cardInfoMes: ['5月20号，一个充满惊喜的日子', '我们俩，如同安排好的就在一起了', '浪漫而温馨，有你的感觉真好']
        }
    }, {
      cardUrl: 'http://dev.wemart.cn/console/images/card/card3.png',
      cardInfo: {
        cardTitle: '浪漫小故事四',
        cardInfoMes: ['5月20号，一个充满惊喜的日子', '我们俩，如同安排好的就在一起了', '浪漫而温馨，有你的感觉真好']
      }
    },{
      cardUrl: 'http://dev.wemart.cn/console/images/card/card1.png',
      cardInfo: {
        cardTitle: '浪漫小故事五',
        cardInfoMes: ['一月一送，浪漫节日送浪漫花', '一月两送，有趣节日送奇异花', '一月四送，有你在每天都是最好的节日']
      }
    }]
  },
  //事件处理函数
  slidethis: function (e) {
    console.log(e);
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',
    });
    var self = this;
    this.animation = animation;
    this.animation.translateY(-420).rotate(-5).translateX(0).step();
    this.animation.translateY(62).translateX(25).rotate(0).step();
    this.setData({
      animationData: this.animation.export()
    });
    setTimeout(function () {
      var cardInfoList = self.data.cardInfoList;
      var slidethis = self.data.cardInfoList.shift();
      self.data.cardInfoList.push(slidethis);
      self.setData({
        cardInfoList: self.data.cardInfoList,
        animationData: {}
      });
    }, 350);
  },
  buythis: function (e) {
    // console.log(e);
    // app.buyDetail = this.data.cardInfoList[e.target.id];
    // wx.navigateTo({
    //   url: '../detail/detail'
    // });
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      });
    });
  }
})