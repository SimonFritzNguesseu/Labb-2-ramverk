<script setup>
import NavBarYes from "../components/NavBarYes.vue";
import StarPlanets from "../components/StarPlanets.vue";
import FetchData from "../components/FetchData.vue";
</script>
<template>
  <custom-event @custom-event="handleCustomEvent"></custom-event>
  <main>
    <NavBarYes />
    <StarPlanets />
    <FetchData />
    <RouterView />
  </main>
</template>
<script>
export default {
  methods: {
    handleCustomEvent(data) {
      console.log(data.message);
    },
  },
};
</script>
