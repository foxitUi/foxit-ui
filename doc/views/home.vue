<template>
  <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
    <div class="page-container page-component">
      <el-scrollbar class="page-component__nav">
        <side-nav :data="navsData['zh-CN']"></side-nav>
      </el-scrollbar>
      <div class="page-component__content">
        <router-view class="content"></router-view>
      </div>
      <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="100" :bottom="150"></el-backtop>
    </div>
  </el-scrollbar>
</template>

<style lang="scss">
@import "assets/home.scss";
</style>

<script>
import navsData from 'config/nav.config.json';
export default {
  data() {
    return {
      navsData,
    };
  },
  watch: {
    '$route.path'() {
      // 触发伪滚动条更新
      this.$refs.componentScrollBar.$el.querySelector('.el-scrollbar__wrap').scrollTop = 0;
      this.$nextTick(() => {
        this.$refs.componentScrollBar.update();
      });
    }
  },
  components: {
    sideNav: () => import('components/sideNav'),
  },
  mounted() {
    document.body.classList.add('is-component');
  },
  destroyed() {
    document.body.classList.remove('is-component');
  },
};
</script>
