<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      error: null,
      planets: [],
      searchTerm: "",
      fetchCount: 0,
    };
  },
  computed: {
    filteredPlanets() {
      return this.planets.filter((planet) =>
        planet.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  watch: {
    planets: function () {
      this.fetchCount++;
    },
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await axios.get("https://swapi.dev/api/planets/");
        this.planets = response.data.results.map((planet) => ({
          ...planet,
        }));
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<template>
  <div>
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search planet by name"
    />
    <button @click="fetchData">Fetch Planets</button>
    <p>Data fetched: {{ fetchCount }} time(s).</p>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Error: {{ error }}</p>
    <div class="card-container" v-else>
      <li class="card" v-for="planet in filteredPlanets" :key="planet.name">
        <h3>{{ planet.name }}</h3>
        <p>Size in diameter: {{ planet.diameter }}</p>
        <p>Climate: {{ planet.climate }}</p>
        <p>Gravity: {{ planet.gravity }}</p>
        <p>Terrain: {{ planet.terrain }}</p>
        <p>Population: {{ planet.population }}</p>
      </li>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.card {
  width: calc(50% - 20px);
  padding: 10px;
  box-sizing: border-box;
}
</style>
