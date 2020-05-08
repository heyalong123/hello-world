<template>
  <div>
    <button @click="fn"><slot></slot></button>
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="less" scoped>
div {
  padding: 0 50px;
  margin-top: 20px;
  button {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: red;
    border: none;
    border-radius: 15px;
    font-size: 10px;
    color: #fff;
  }
}
</style>
