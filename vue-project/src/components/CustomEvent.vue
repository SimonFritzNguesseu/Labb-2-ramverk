<template>
  <div>
    <button @click="emitCustomEvent">I LOVE STAR WARS</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitCustomEvent() {
      this.$emit("custom-event", { message: "I LOVE STAR WARS!" });
    },
  },
};
</script>

<!-- custom event handled on the aboutview page -->
