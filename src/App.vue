<script>
// import userAPI from './api/user'
// import './weui.css'
import 'mp-weui/lib/style.css'
import './iconfont.css'
import './grid.css'
export default {
  onLaunch() {
    // this.$store.dispatch('timeSync')
  },
  created() {
    wx.showLoading()
    this.$store.dispatch('refreshToken').then(() => {
      wx.hideLoading()
    })
    // 调用API从本地缓存中获取数据
    // userAPI.wxAutoLogin(
    //   resp => {
    //     console.log(resp)
    //     wx.setStorageSync('user', resp)
    //   },
    //   err => {
    //     console.log(err)
    //     wx.redirectTo({
    //       url: `/pages/login/main?authID=${err.response.data.authID}`
    //     })
    //   }
    // )
  },
  methods: {}
}
</script>

<style>
.weui-loadmore__tips_in-line {
  background-color: none !important;
}
/* .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
} */
/* @import '../static/iconfont.css' */
/* @import './grid.styl' */
.test {
  font-size: 10px;
}
</style>
