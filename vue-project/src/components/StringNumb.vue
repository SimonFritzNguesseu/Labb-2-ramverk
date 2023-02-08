<template>
  <div>
    <p>Number: {{ number }}</p>
    <p>Message: {{ message }}</p>
    <button @click="logProps">C.Log Props</button>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    logProps() {
      console.log("Number:", this.number);
      console.log("Message:", this.message);
    },
  },
};
</script>
