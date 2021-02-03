<template>
  <div class="side-nav">
    <div class="nav-item" v-for="(item, key) in data" :key="key">
      <template v-if="item.children">
        <a>{{item.name}}</a>
        <div class="nav-item" v-for="(navItem, key) in item.children" :key="key">
          <router-link class="" active-class="active" :to="navItem.path" exact v-text="navItem.title || navItem.name">
          </router-link>
        </div>
      </template>
      <template v-else-if="item.groups">
        <a>{{item.name}}</a>
        <div class="nav-group" v-for="(group, key) in item.groups" :key="key">
          <div class="nav-group__title">{{group.groupName}}</div>
          <div class="nav-item" v-for="(navItem, key) in group.list" :key="key">
            <router-link active-class="active" :to="navItem.path" exact v-text="navItem.title"></router-link>
          </div>
        </div>
      </template>
      <template v-else>
        <router-link active-class="active" :to="item.path" exact v-text="item.name"></router-link>
      </template>
    </div>
  </div>
</template>
<style lang="scss">
@import "assets/sideNav.scss";
</style>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
  },
  data() {
    return {
    };
  },
};
</script>
