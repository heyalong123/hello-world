<template>
  <div class="hm-input">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="fn"
      :class="{ success: status === 'success', error: status === 'error' }"
    />
    <div class="tips" v-show="status === 'error'">{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '请输入.....',
    },
    value: String,
    rule: RegExp,
    message: String,
  },
  data() {
    return {
      status: '',
    }
  },
  methods: {
    fn(e) {
      let va = e.target.value
      this.$emit('input', va)
      this.validate(va)
    },
    // 单独提取出来进行校验
    validate(va) {
      if (this.rule.test(va)) {
        this.status = 'success'
        return true
      } else {
        this.status = 'error'
        return false
      }
    },
  },
}
</script>
<style lang="less" scoped>
.hm-input {
  margin: 0 10px;
  height: 50px;

  input {
    height: 30px;
    line-height: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid #cccccc;
    font-size: 16px;
    width: 100%;
    &.success {
      border-color: green;
    }
    &.error {
      border-color: red;
    }
  }
  .tips {
    color: red;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
  }
}
</style>
