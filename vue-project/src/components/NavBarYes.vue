<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">STAR WARS</a>
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
  <div class="image-container">
    <img src="/src/assets/images/starwarslogo.jpeg" />
  </div>
</template>

<style scoped></style>

<!-- Simple navbar from bootstrap above -->
