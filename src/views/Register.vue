<template>
  <div class="register">
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <hm-input
      type="text"
      placeholder="用户名/手机号"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></hm-input>
    <hm-input
      type="text"
      placeholder="昵称"
      v-model="nickname"
      :rule="/[\u4E00-\u9FA5\uF900-\uFA2D]/"
      message="昵称必须是中文"
      ref="nickname"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="密码不对"
      ref="password"
    ></hm-input>
    <hm-button @click="fn">注册</hm-button>
    <div class="go-register">
      有账号,去<router-link to="/login" class="link">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    }
  },
  methods: {
    fn() {
      // 注册之前进行校验
      if (
        !this.$refs.username.validate(this.username) ||
        !this.$refs.nickname.validate(this.nickname) ||
        !this.$refs.password.validate(this.password)
      ) {
        return
      }
      this.$axios({
        method: 'post',
        url: '/register',
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        },
      }).then((res) => {
        console.log(res.data)
        const { statusCode, message } = res.data
        if (statusCode === 200) {
          this.$toast.success(message)
          this.$router.push({
            name: 'login',
            params: {
              username: this.username,
              password: this.password,
            },
          })
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
