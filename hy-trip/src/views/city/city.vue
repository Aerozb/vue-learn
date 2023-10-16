<template>
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    @cancel="onCancel"
    show-action
  />
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const onCancel = () => {
  router.back();
};
</script>

<style lang="less" scoped>
</style>