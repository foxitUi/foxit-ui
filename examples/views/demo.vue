<template>
  <div style="text-align: center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <fw-button>默认按钮</fw-button>
    <fw-button>主要按钮</fw-button>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.el-button--danger{
  color: #000;
}
</style>
