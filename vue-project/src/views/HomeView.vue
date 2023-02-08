<script setup>
import NavBarYes from "../components/NavBarYes.vue";
import StarPlanets from "../components/StarPlanets.vue";
import FetchData from "../components/FetchData.vue";
</script>
<template>
  <main>
    <NavBarYes />
    <StarPlanets />
    <FetchData />
    <RouterView />
  </main>
</template>
