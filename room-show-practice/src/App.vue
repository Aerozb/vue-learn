<template>
  <AreaHeader
    :title="highScore.title"
    :subtitle="highScore.subtitle"
  ></AreaHeader>
  <template v-for="item in highScore.list" :key="item.id" >
    <img :src="item.picture_url" alt="">
  </template>
</template>

<script setup>
import highScore from "./data/high_score.json";
import AreaHeader from "./components/AreaHeader.vue";
console.log(highScore);
</script>

<style lang="less" scoped>
.app {
  width: 1032px;
  padding: 40px;
  margin: 0 auto;
}
</style>
