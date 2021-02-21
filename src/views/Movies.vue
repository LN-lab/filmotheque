<template>
  <div id="movies">
    <Layout title="Mes films">
      <template #content>
        <div class="nav">
          <div class="search">
            <input
              type="text"
              v-model="inputString"
              placeholder="Rechercher un film..."
            />
          </div>

          <div class="newMovie">
            <router-link to="new-movie">Ajouter un film</router-link>
          </div>
        </div>

        <div class="wallpaper">
          <p id="loading" 
            v-if="getMovies.length == 0">Chargement ...
          </p>
          <router-link :to="`/movie/${movie.id}`"
            v-else-if="inputString.length == 0"
       
              v-for="movie in getSortedMovies()" :key="movie.id">

               <!-- display movies -->
              <div class="movie">
                <div class="image" :style="{ backgroundImage: `url(${movie.url})` }"></div>
                <MovieCard>
                  <template #Title> {{ movie.name }} </template>
                  <template #Date> {{ movie.year }} </template>
                </MovieCard>
              </div>
          </router-link> 
         
          <router-link :to="`/movie/${movie.id}`"
            v-else
              v-for="movie in getFilteredMovies(inputString)" :key="movie.id">
          <!-- display movies -->
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
import { mapGetters,  } from "vuex";


export default {
  name: "Movies",
  components: { MovieCard, Layout,},

  data() {
    return {
      inputString: "",
      value: "",
      option:"",     
    };
  },

  computed: {
    ...mapGetters(["getMovies", "getFilteredMovies", "getSortedMovies"]),
  },
 
};
</script>

<style scoped>
a:-webkit-any-link {
  text-decoration: none;
  color: hsla(0, 0%, 100%, 0.7);
}
#movies {
  width: 100%;
}
.nav {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}
.search {
  width: 83%;
}
.search ::placeholder{
  color:#c3c3c7
}
.search input,
.newMovie{
  padding: 0 20px;
  border-radius: 20px;
  border: 4px solid #353d6d;
  -webkit-box-shadow: 0 4px 0 0 rgb(0 0 0 / 20%);
  box-shadow: 0 4px 0 0 rgb(0 0 0 / 20%);
  height: 56px;
  background: rgba(0, 0, 0, 0.2);
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 16px;
  width: 100%
}

.newMovie {
  background: #353d6d;
  text-align: center;
  padding-top: 10px;
  width: 15%;
}
.newMovie a{
  color:aliceblue;
  font-size: 1.2rem;
}
.newMovie a{
  color:aliceblue;
  font-size: 1.2rem;
}
a:hover{
  color:cornflowerblue
  
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
  -webkit-box-shadow: 0 4px 0 0 rgb(0 0 0 / 20%);
  box-shadow: 0 4px 0 0 rgb(0 0 0 / 20%);
}
.image {
  border-radius: 15px;
  height: 300px;
  width: 100%;
  background-position: 50%;
  background-size: cover;
}
</style>
