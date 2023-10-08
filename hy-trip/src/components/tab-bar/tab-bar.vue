<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="item.path">
        <van-tabbar-item :to="item.path">
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getAssetURL(item.image)"
              alt=""
            />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item> </template
    ></van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar.js";
import { getAssetURL } from "@/utils/load_assets.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const currentIndex = ref(0);
let router = useRouter();

//点击切换图标和切换页面内容
const itemClick = (index, path) => {
  currentIndex.value = index;
  router.push(path);
};
</script>

<style lang="less" scoped>
// .tab-bar {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 50px;
//   display: flex;

//   border-top: 1px solid #f3f3f3;

//   .tab-bar-item {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     img {
//       width: 36px;
//     }

//     .text {
//       font-size: 12px;
//       margin-top: 2px;
//     }
//   }
// }
</style>