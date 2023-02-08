<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <CompOne msg="Star wars!" />
    </div>
  </header>
  <div class="background-img"></div>
  <RouterView />
</template>

<style scoped></style>
