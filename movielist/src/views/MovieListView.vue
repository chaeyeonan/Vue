<template>
  <v-app>
    <v-container>
      <search-bar />
      <movie-list />
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import MovieList from "@/components/MovieList.vue";

export default {
  name: "MovieListView",
  components: {
    SearchBar,
    MovieList,
  },
};
</script>
