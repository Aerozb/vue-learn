<template>
  <AreaHeader
    :title="highScore.title"
    :subtitle="highScore.subtitle"
  ></AreaHeader>
  <<template v-for="item in highScore.list" :key="item.id" >
    <div>
      
    </div>
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
