<template>
  <div>
    <Layout title="Liste des films">
      <template #content>
        <input type="text" v-model="string" placeholder="Rechercher un film...">
        <p v-if="getMovies.length == 0">Chargement ...</p>
        <router-link 
          v-else v-for="movie in getFilteredMovies(string)" 
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
import { mapGetters } from 'vuex';

export default {
  name: 'Movies',
  components: { MovieCard , Layout },

  data() {
    return {
      string: "",
    }
  },

  computed: {
      ...mapGetters(['getMovies', 'getFilteredMovies']),
  },
};

</script>

<style scoped>
input{
  margin: 10px;
}
</style>