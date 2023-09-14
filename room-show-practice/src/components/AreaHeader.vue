<template>
  <div class="app">
    <div class="area-header">
      <div class="title">{{ title }}</div>
      <div class="subTitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script setup> 
import { defineProps } from 'vue';
defineProps({
    title:{
        type:String,
        default:"默认标题"
    },
    subtitle:{
        type:String,
        default:"默认子标题"
    }
})
</script>

<style lang="less" scoped>
  .area-header {
    height: 84px;
                           
    .title {
      font-size: 22px;
    }

    .subtitle {
      margin-top: 12px;
      font-size: 16px;
    }
  }
</style>
