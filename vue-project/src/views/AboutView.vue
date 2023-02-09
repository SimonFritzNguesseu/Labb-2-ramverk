<script setup>
import NavBarYes from "../components/NavBarYes.vue";
import AboutUs from "../components/AboutUs.vue";
</script>
<template>
  <main>
    <NavBarYes />
    <AboutUs />
    <div><p>Console log custom event props , and VuexCounter below</p></div>
    <div>
      <custom-event @custom-event="handleCustomEvent"></custom-event>
    </div>
    <div>
      <StringNumb :number="10000" :message="'May the force be with you'" />
    </div>
    <VuexCounter />
    <RouterView />
  </main>
</template>
<script>
import VuexCounter from "../components/VuexCounter.vue";
import CustomEvent from "../components/CustomEvent.vue";
import StringNumb from "../components/StringNumb.vue";
export default {
  methods: {
    handleCustomEvent(data) {
      console.log(data.message);
    },
  },
};
</script>

<!-- AboutView with method handler for the custom event console loging
the data message, aswell as displaying the store value councount and
the props to the console.-->
