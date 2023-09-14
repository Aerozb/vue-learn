<template>
  <AreaHeader
    :title="highScore.title"
    :subtitle="highScore.subtitle"
  ></AreaHeader>
<RoomArea :highScore="highScore"></RoomArea>
</template>

<script setup>
import highScore from "./data/high_score.json";
import AreaHeader from "./components/AreaHeader.vue";
import RoomArea from "./components/RoomArea.vue";
</script>

<style lang="less" scoped>
.app {
  width: 1032px;
  padding: 40px;
  margin: 0 auto;
}
</style>
