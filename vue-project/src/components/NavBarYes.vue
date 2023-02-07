<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Star Wars Planets</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/">Planets</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about">About us</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>
    <h3 class="blue">Welcome to a page about star wars planets!</h3>
  </div>
</template>

<style scoped></style>
