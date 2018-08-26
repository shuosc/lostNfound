module.exports = [
  {
    alias: '/',
    path: '/pages/index/index',
    name: 'NewsList',
    config: {
      enablePullDownRefresh: true
    }
  },
  {
    alias: '/lost-n-found',
    path: '/pages/lostNFound/index',
    name: 'lostNFound',
    config: {
      enablePullDownRefresh: true,
      navigationBarTitleText: '失物招领'
    }
  },
  {
    alias: '/new',
    path: '/pages/lostNFound/new',
    name: 'lostNFoundNew',
    config: {
      navigationBarTitleText: '启事发布'
    }
  },
  {
    alias: '/post',
    path: '/pages/lostNFound/post',
    name: 'lostNFoundPost',
    config: {
      navigationBarTitleText: '启事详情'
    }
  }
]
