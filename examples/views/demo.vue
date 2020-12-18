<template>
  <div style="text-align: center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <fw-button>默认按钮</fw-button>
    <fw-button type="primary">主要按钮</fw-button>
    <fw-button type="success">成功按钮</fw-button>
    <fw-button type="info">信息按钮</fw-button>
    <fw-button type="warning">警告按钮</fw-button>
    <fw-button type="danger">危险按钮</fw-button>

    <fw-button plain>朴素按钮</fw-button>
    <fw-button type="primary" plain>主要按钮</fw-button>
    <fw-button type="success" plain>成功按钮</fw-button>
    <fw-button type="info" plain>信息按钮</fw-button>
    <fw-button type="warning" plain>警告按钮</fw-button>
    <fw-button type="danger" plain>危险按钮</fw-button>

    <fw-button round>圆角按钮</fw-button>
    <fw-button type="primary" round>主要按钮</fw-button>
    <fw-button type="success" round>成功按钮</fw-button>
    <fw-button type="info" round>信息按钮</fw-button>
    <fw-button type="warning" round>警告按钮</fw-button>
    <fw-button type="danger" round>危险按钮</fw-button>

    <fw-button icon="el-icon-search" circle></fw-button>
    <fw-button type="primary" icon="el-icon-edit" circle></fw-button>
    <fw-button type="success" icon="el-icon-check" circle></fw-button>
    <fw-button type="info" icon="el-icon-message" circle></fw-button>
    <fw-button type="warning" icon="el-icon-star-off" circle></fw-button>
    <fw-button type="danger" icon="el-icon-delete" circle></fw-button>
    <fw-button type="primary"
      >上传<i class="el-icon-upload el-icon--right"></i
    ></fw-button>

    <fw-button disabled>默认按钮</fw-button>
    <fw-button type="primary" disabled>主要按钮</fw-button>
    <fw-button type="success" disabled>成功按钮</fw-button>
    <fw-button type="info" disabled>信息按钮</fw-button>
    <fw-button type="warning" disabled>警告按钮</fw-button>
    <fw-button type="danger" disabled>危险按钮</fw-button>

    <fw-button type="primary" icon="el-icon-edit"></fw-button>
    <fw-button type="primary" icon="el-icon-share"></fw-button>
    <fw-button type="primary" icon="el-icon-delete"></fw-button>
    <fw-button type="primary" icon="el-icon-search">搜索</fw-button>
    <fw-button type="primary"
      >上传<i class="el-icon-upload el-icon--right"></i
    ></fw-button>

    <fw-button type="primary" :loading="true">加载中</fw-button>

    <fw-button>默认按钮</fw-button>
    <fw-button size="medium">中等按钮</fw-button>
    <fw-button size="small">小型按钮</fw-button>
    <fw-button size="mini">超小按钮</fw-button>
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
