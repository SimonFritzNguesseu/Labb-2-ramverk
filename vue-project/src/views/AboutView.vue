<script setup>
import NavBarYes from "../components/NavBarYes.vue";
import CompThree from "../components/CompThree.vue";
</script>
<template>
  <main>
    <NavBarYes />
    <CompThree />
    <RouterView />
  </main>
  <div class="about">
    <h1 class="blue">About Star Wars</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
