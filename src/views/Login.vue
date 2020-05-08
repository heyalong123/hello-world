<template>
  <div class="login">
    <!-- 头部 -->
    <hm-header>我的登录</hm-header>
    <!-- 图标 -->
    <hm-logo></hm-logo>
    <!-- input -->
    <hm-input
      type="text"
      placeholder="请输入用户名"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="密码不对"
      ref="password"
    ></hm-input>
    <!-- 登录 -->
    <hm-button @click="fd">登录</hm-button>
    <!-- 去注册得链接 -->
    <div class="go-register">
      没有账号,去<router-link to="/register" class="link">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  created() {
    this.username = this.$route.params.username
    this.password = this.$route.params.password
    // console.log(this.$route)
  },
  methods: {
    async fd() {
      // 发送请求之前进行校验
      if (
        !this.$refs.username.validate(this.username) ||
        !this.$refs.password.validate(this.password)
      ) {
        return
      }
      this.$axios({
        method: 'post',
        url: '/login',
        data: {
          username: this.username,
          password: this.password,
        },
      }).then((res) => {
        console.log(res.data)
        const { statusCode, message } = res.data
        if (statusCode === 200) {
          this.$toast.success(message)
          this.$router.push('/user')
        } else {
          this.$toast.fail(message)
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
.go-register {
  margin-top: 20px;
  font-size: 20px;
  text-align: right;
  padding: 0 10px;
  .link {
    color: #999;
  }
}
</style>
