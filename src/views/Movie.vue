<template>
  <div>
   
      <p> L'id du film choisi est {{$route.params.id}}</p>

      <p> Je le cherche parmis tous ces films: </p>
      <p v-for="movie in getMovies" :key="movie.id">{{movie.name}}</p>

      <p> Je l'ai trouvé! : </p>
      <p> {{getMovieById($route.params.id).name}}</p>
      <p>Veuillez remplir ces champs pour le modifier:</p>
    <Form/>
  </div>
</template>

<script>
import Form from '../components/Form.vue';
import { mapActions, mapGetters } from 'vuex';

export default {

  name:'Movie',

  components: { Form },


  computed: { 
    ...mapGetters(['getMovies', 'getMovieById']),

  },
  methods: {
      ...mapActions(['sendToAPI'])
  },

};
</script>

<style>

</style>