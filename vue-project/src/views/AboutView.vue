<script setup>
import NavBarYes from "../components/NavBarYes.vue";
import AboutUs from "../components/AboutUs.vue";
</script>
<template>
  <main>
    <NavBarYes />
    <AboutUs />
    <div><p>Console log custom event and props below</p></div>
    <div>
      <custom-event @custom-event="handleCustomEvent"></custom-event>
    </div>
    <div>
      <StringNumb :number="10000" :message="'May the force be with you'" />
    </div>
    <RouterView />
  </main>
</template>
<script>
import CustomEvent from "../components/CustomEvent.vue";
import StringNumb from "../components/StringNumb.vue";
export default {
  components: {
    CustomEvent,
    StringNumb,
  },
  methods: {
    handleCustomEvent(data) {
      console.log(data.message);
    },
  },
};
</script>
