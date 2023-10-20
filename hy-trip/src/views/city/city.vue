<template>
  <div class="city-map">
    <van-search placeholder="城市/区域/位置" shape="round" @cancel="onCancel" show-action />
    <van-tabs v-model:active="tabActive">
      <template v-for="(diff_item, key) in allCities" :key="key">
        <!--  :name="key"是vant3的一个属性，表示把Json对象的key绑定到tabActive -->
        <van-tab :title="diff_item.title" :name="key"></van-tab>
      </template>
    </van-tabs>
    <div class="content">
      <template v-for="item in allCities">
       <city-group :group-data="item"/>
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
import CityGroup from "./cpns/city-group.vue";

const router = useRouter();
const cityStore = useCityStore();

const onCancel = () => {
  router.back();
};
// const allCity = ref({});

// 获取当前所有城市分类及子目录
const { allCities } = toRefs(cityStore);
//这里每次都会去获取值，由于allCities是响应式的，所以获取完后就回去渲染出来
cityStore.fetchAllCitiesData();

const curGroup = computed(() => allCities.value[tabActive.value])

const tabActive = ref(0);

</script>

<style lang="less" scoped></style>