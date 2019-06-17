const util = require('../../../utils/util.js')

const urls = ['index', 'explore', 'user'].map(v => '/pages/' + v + '/' + v)
const icons = ['01', '02', '03'].map(v => '/res/img/navi/' + v + '.png')

Component({
  properties: {},
  data: {
    navis: urls.map((val, i) => ({
      icon: icons[i],
      url: val
    }))
  },
  methods: {
    tapNavi: function(e) {
      const data = e.target.dataset
      data.url.includes(util.getCrtUrl()) || wx.navigateTo({
        url: data.url,
      })
    }
  }
})