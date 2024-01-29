<script>
export default {
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.imdbID">{{ movie.Title }}</li>
    </ul>
  </div>
</template>
