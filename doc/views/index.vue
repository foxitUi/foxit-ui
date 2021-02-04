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
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
      <el-scrollbar class="pContent">
        <div style="height:1200px;">12</div>
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
  background: #ff6e14;
  /*处理底部出现横向滚动条*/
  /deep/.el-scrollbar__wrap {
    overflow-x: auto;
  }
}
.pContent {
  width: calc(100% - 280px);
  height: 100%;
  background: #998a80;
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