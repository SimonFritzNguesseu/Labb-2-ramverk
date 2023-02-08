<template>
  <div>
    <button @click="emitCustomEvent">Emit Custom Event</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitCustomEvent() {
      this.$emit("custom-event", { message: "Hello World!" });
    },
  },
};
</script>
