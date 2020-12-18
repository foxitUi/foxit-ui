<template>
  <el-button 
    :size="size"
    :type="type"
    :icon="icon"
    :native-type="nativeType"
    :plain="plain"
    :round="round"
    :circle="circle"
    :loading="loading"
    :disabled="disabled"
    :autofocus="autofocus"
  >
    <slot></slot>
  </el-button>
</template>
<script>
export default {
  name: "fw-button",
  props: {
    size: {
      type: String,
      default: "",
    },
    type:{
      type: String,
      default: "",
    },
    icon:{
      type: String,
      default: "",
    },
    nativeType:{
      type: String,
      default: "button",
    },
    plain:{
      type:Boolean,
      default: false,
    },
    round:{
      type:Boolean,
      default: false,
    },
    circle:{
      type:Boolean,
      default: false,
    },
    loading:{
      type:Boolean,
      default: false,
    },
    disabled:{
      type:Boolean,
      default: false,
    },
    autofocus:{
      type:Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>