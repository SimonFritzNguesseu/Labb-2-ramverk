<!-- defining props and a button to log them-->
<template>
  <div>
    <p>Number: {{ number }}</p>
    <p>Message: {{ message }}</p>
    <button @click="logProps">Log Props</button>
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
  /* console.log of props*/
  methods: {
    logProps() {
      console.log("Number:", this.number);
      console.log("Message:", this.message);
    },
  },
};
</script>
