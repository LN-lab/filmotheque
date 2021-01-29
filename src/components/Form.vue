<template>
  <div>
      <InputWithError 
        label="Titre" 
        :value="titleValue"
        @input="getMovieDataFromInput( $event, 'title')" />
        <!--j'ecoute 'input-value' du composant-fils InputWithError / je me sers de la fonction getMovieData pour récupérer la data grâce à l'$event que je mets dans 'title'-->
    
      <InputWithError
        label="Année" 
        :value="yearValue"
        @input="getMovieDataFromInput( $event, 'year' )" />
    
      <InputWithError
        label="Image" 
        :value="imageValue"
        @input="getMovieDataFromInput( $event, 'image' )" />

      <button
        @click="$emit( 'form-submitted', newMovie )" type="submit">
        Envoyer
      </button>
    <!--j'écoute le @click du bouton, je me sers de $emit pour envoyer chaque data contenues dans 'event'-->
      
  </div>
</template>

<script>
import InputWithError from "./InputWithError"

export default {
  name: "Form",
  components: { InputWithError },
  data () {
    return {
      newMovie :{
        title: "",
        year:"",
        image:"",
      
      }
    }
  },
  props: {
    titleValue: {
      type: String,
      default: ""
    },
    yearValue: {
      type: String,
      default: ""
    },
    imageValue: {
      type: String,
      default:"",
    }
  },
    methods:{
      getMovieDataFromInput(event, data){
        this.newMovie[data] = event;
      },
    },
    mounted() {
      this.newMovie.title = this.titleValue;
      this.newMovie.year = this.yearValue;
      this.newMovie.image = this.imageValue;
    }
  }

</script>

<style>
</style>