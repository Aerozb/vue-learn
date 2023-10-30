<template>
  <div class="home">
    <home-nav-bar />
    <home-search-box/>
    <home-categories />
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from './cpns/home-categories.vue'

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()

</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}


</style>