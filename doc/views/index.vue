<template>
  <div class="h-p-100">
    <div class="pHead">
      <div class="pLogoWrap">
        <img :src="logo" />
      </div>
      <div class="pNav">
        <div class="pNavItem active">
          <span>设计</span>
          <b></b>
        </div>
        <div class="pNavItem">
          <span>组件</span>
        </div>
        <div class="pNavItem">
          <span class="other">通用资源</span>
        </div>
      </div>
    </div>
    <div class="pMain">
      <el-scrollbar class="pSideNav">
        <el-menu :default-openeds="ad">
          <el-submenu index="1">
            <template slot="title">
              <span>设计原则</span>
            </template>
            <el-menu-item index="1-1">对比原则</el-menu-item>
            <el-menu-item index="1-2">对齐原则</el-menu-item>
            <el-menu-item index="1-3">反应原则</el-menu-item>
            <el-menu-item index="1-4">亲密原则</el-menu-item>
            <el-menu-item index="1-5">易用原则</el-menu-item>
            <el-menu-item index="1-6">直接原则</el-menu-item>
            <el-menu-item index="1-7">重复原则</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
      <el-scrollbar class="pContent">
      </el-scrollbar>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pHead {
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 0 42px;
  background: #212121;
}
.pLogoWrap {
  display: flex;
  align-items: center;
}
.pNav {
  display: flex;
  align-items: center;
  .pNavItem {
    width: 100px;
    text-align: center;
    span {
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      display: inline-block;
    }
    &.active {
      span {
        color: #ff6e14;
        position: relative;
      }
      span::after {
        position: absolute;
        content: "";
        display: inline-block;
        width: 50px;
        height: 6px;
        background: #ff6e14;
        opacity: 0.1;
        top: 9px;
        right: -8px;
      }
      .other::after {
        width: 90px;
        right: -12px;
      }
    }
  }
}
.pMain {
  display: flex;
  height: calc(100% - 70px);
}
.pSideNav {
  width: 280px;
  height: 100%;
  border-right: 1px solid #eeeeee;
  /*处理底部出现横向滚动条*/
  /deep/.el-scrollbar__wrap {
    overflow-x: auto;
  }
  /deep/.el-scrollbar__bar{
    opacity: 0;
  }
  /deep/ .el-menu{
    border-right: none;
  }
}
.pContent {
  width: calc(100% - 280px);
  height: 100%;
  /*处理底部出现横向滚动条*/
  /deep/.el-scrollbar__wrap {
    overflow-x: auto;
  }
}
</style>
<script>
import logo from 'images/logo.png'
export default {
  data() {
    return {
      logo,
      ad:['1']
    }
  },
  mounted() {
    document.body.classList.add('is-component');
  },
  destroyed() {
    document.body.classList.remove('is-component');
  },
}
</script>