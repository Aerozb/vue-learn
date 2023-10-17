<template>
  <div class="city-map">
    <van-search
      v-model="chy_value"
      placeholder="城市/区域/位置"
      shape="round"
      @cancel="onCancel"
      show-action
    />
    <van-tabs v-model:active="tabActive">
      <template v-for="(diff_item, key) in allCities" :key="key">
        <van-tab :title="diff_item.title" :name="key"></van-tab>
      </template>
    </van-tabs>
    <div class="content">
      <template v-for="item in allCities[tabActive]?.cities">
      <div>{{ item }}</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, toRefs } from "vue";
import { useRouter } from "vue-router";
// import { getCityAll } from "@/services";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";

const router = useRouter();
const cityStore = useCityStore();

const onCancel = () => {
  router.back();
};
const allCity = ref({});

// 获取当前所有城市分类及子目录
const { allCities } = toRefs(cityStore);
cityStore.fetchAllCitiesData().then(res => {});

const tabActive = ref(0);

</script>

<style lang="less" scoped>
</style>