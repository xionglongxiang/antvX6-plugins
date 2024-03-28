<template>
  <div>
    <h3>{{ a }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let a = ref<string>("string from comp");
</script>

<style scoped>
h3 {
  margin-top: 60px;
  color: red;
}
</style>
