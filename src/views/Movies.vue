<template>
  <div id="movies">
    <Layout title="Liste des films">
      <template #content>
        <div class="search">
          <input
            type="text"
            v-model="string"
            placeholder="Rechercher un film..."
          />
        </div>
        <div class="wallpaper">
          <p id="loading" v-if="getMovies.length == 0">Chargement ...</p>
          <router-link
            v-else
            v-for="movie in getFilteredMovies(string)"
            :key="movie.id"
            :to="`/movie/${movie.id}`"
          >
            <div class="movie">
              <div
                class="image"
                :style="{ backgroundImage: `url(${movie.url})` }">
                </div>
                <MovieCard>
                  <template #Title> {{ movie.name }} </template>
                  <template #Date> {{ movie.year }} </template>
                </MovieCard>
              
            </div>
          </router-link>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import Layout from "../components/Layout";
import { mapGetters } from "vuex";

export default {
  name: "Movies",
  components: { MovieCard, Layout },

  data() {
    return {
      string: "",
    };
  },

  computed: {
    ...mapGetters(["getMovies", "getFilteredMovies"]),
  },
};
</script>

<style scoped>

#movies{
  width: 100%;

}
.search {
  margin: 30px 0;
}

.search input {
  width: 100%;
  padding: 0 20px;
  border-radius: 20px;
  border: 4px solid #353d6d;
  -webkit-box-shadow: 0 7px 0 0 rgb(0 0 0 / 20%);
  box-shadow: 0 7px 0 0 rgb(0 0 0 / 20%);
  height: 56px;
  background: rgba(0, 0, 0, 0.2);
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 16px;
}
.wallpaper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
.movie {
  width: 380px;
  border-radius: 20px;
  padding: 10px;
  background: #353d6d;
  -webkit-box-shadow: 0 7px 0 0 rgb(0 0 0 / 20%);
  box-shadow: 0 7px 0 0 rgb(0 0 0 / 20%);
}
.image {
  border-radius: 15px;
  height: 300px;
  width: 100%;
  background-position: 50%;
  background-size: cover;
}
</style>
