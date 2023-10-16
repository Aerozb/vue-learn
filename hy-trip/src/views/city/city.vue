<template>
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    @cancel="onCancel"
    show-action
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from "vue-router";
import { getCityAll } from "@/services";
const router = useRouter();
const onCancel = () => {
  router.back();
};
const allCity = ref({})
getCityAll().then(res => {
  allCity.value = res.data
  console.log(allCity);
})

</script>

<style lang="less" scoped>
</style>