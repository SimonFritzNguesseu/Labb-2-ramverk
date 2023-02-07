<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <CompOne msg="Star wars!" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
