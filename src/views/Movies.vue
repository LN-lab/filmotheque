<template>
  <div>
    <Layout title="Liste des films">
      <template #content>
        <input type="text" v-model="search" placeholder="Rechercher un film...">
        <p v-if="getMovies.length == 0">Chargement ...</p>
        <router-link 
          v-else v-for="movie in getSearchedMovie" 
          :key="movie.id" 
          :to="`/movie/${movie.id}`">
          <MovieCard>
            <template #Image><img :src="movie.url" alt="image du film" /> </template>
            <template #Title>{{ movie.name }}</template>
            <template #Date>{{ movie.year }}</template>
          </MovieCard>
          </router-link>
      </template>
    </Layout>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard';
import Layout from '../components/Layout';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Movies',
  components: { MovieCard , Layout },

  data() {
    return {
      search: "",
    }
  },

  computed: {
      getSearchedMovie () {
        let movies = this.getMovies;
        let searchedMovie = this.search.toLowerCase();
        let filterMovie = movie => movie.name.toLowerCase().includes(searchedMovie)
        return movies.filter(filterMovie)
      },
      ...mapGetters(['getMovies']),
    },
    
  };

</script>

<style scoped>
input{
  margin: 10px;
}
</style>