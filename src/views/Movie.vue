<template>
  <div>
   
      <p> L'id du film choisi est {{$route.params.id}}</p>

      <p> Je le cherche parmis tous ces films: </p>
      <p v-for="movie in getMovies" :key="movie.id">{{movie.name}}</p>

      <p> Je l'ai trouvé! : </p>
      <p> {{getMovieById($route.params.id).name}}</p>
      <p>Veuillez remplir ces champs pour le modifier:</p>
      <p v-if="errors.length">
          <ul>
            <li v-for="error in errors" :key="error">{{error}}</li>
        </ul>
        </p>
    <Form
      :titleValue="getMovieById($route.params.id).name"
      :yearValue="getMovieById($route.params.id).year"
      :imageValue="getMovieById($route.params.id).url"
      @form-submitted="checkForm"
    ></Form>

  </div>
</template>

<script>
import Form from '../components/Form.vue';
import { mapActions, mapGetters } from 'vuex';

export default {

  name:'Movie',

  data (){
    return{
      errors: [],
    }
  },

  components: { Form },


  computed: { 
    ...mapGetters(['getMovies', 'getMovieById']),
  },

  methods: {
     checkForm : async function(data){
        if (data.title && data.year) {
         await this.sendToAPI(data); // methode pour modifier devrait être put mais ne fonctionne pas avec cette API, du coup on crée un nouveau film
         alert('Film modifié !');
         this.$router.push("/");
        }
        this.errors = [];
        if (!data.title) {
          this.errors.push('Veuillez renseigner un titre');
        }
        if (!data.year) {
          this.errors.push('Veuillez renseigner une année');
        }
        if (!data.image) {
          this.errors.push('Veuillez renseigner une url');
        }
     },
      ...mapActions(['sendToAPI'])
  },


};
</script>

<style>

</style>