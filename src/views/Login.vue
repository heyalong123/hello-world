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
          this.$toast.success('登录成功')
          this.$router.push('/user')
        } else {
          this.$toast.fail('登录失败')
        }
      })
    },
  },
}
</script>
<style lang="less" scoped></style>
