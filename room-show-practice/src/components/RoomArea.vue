<template>
  <div class="room-list">
    <template v-for="itemData in highScore.list" :key="itemData.id">
      <RoomItem :itemData="itemData"></RoomItem>
    </template>
  </div>
</template>

<script setup>
import RoomItem from "./RoomItem.vue";
import { defineProps } from "vue";
defineProps({
  highScore: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px -8px;
}
</style>