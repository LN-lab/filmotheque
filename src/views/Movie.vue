<template>
  <div>
      <p> L'id du film est {{ $route.params.id }}</p>

      <p> Je le cherche parmis tous ces id des films: </p>
      <p v-for="movie in movies" :key="movie.id">{{movie.id}}</p>

      <p v-if="currentMovie">Voici le film trouvé :   
        <ul>
          <li>Titre : {{currentMovie.name}}</li>
          <li>Année: {{currentMovie.year}}</li>
          <li>Lien vers l'image: {{currentMovie.url}}</li>
        </ul>

      <p>Veuillez remplir ces champs pour le modifier:</p>
    <!--S'il on veut préremplir les valeur des champs:
    <Form v-if="currentMovie"
      :titleValue="currentMovie.name"
      :yearValue="currentMovie.year"
      :imageValue="currentMovie.url"
    ></Form>
    -->
    <Form/>
  </div>
</template>

<script>
import axios from 'axios';
import Form from '../components/Form.vue';

export default {
//nom du composant
  name:'Movie',

//autres composants utilisés dans celui-ci
  components: { Form },

//données dont  on a besoin sur ce composant
  data() {
    return {
      movies: [],
      movieId: "",
      
    }
  },
  //données dans lesquelles on met le résutat d'un calcul
  computed: {
    currentMovie() {
      return this.movies.find((movie) => movie.id === this.movieId)
    },
  },
  
  //actions faites juste avant l'affichage du composant
  async mounted () {
    // get tous les films
    const response = await axios.get('https://movies-api.alexgalinier.now.sh/');
    this.movies = response.data;

    //get id du film courant avec le router
    this.movieId = this.$route.params.id;
    console.log(this.movieId);

    //enregistrer film courant 

  }
};
</script>

<style>

</style>