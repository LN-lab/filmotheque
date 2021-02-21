<template>
  <div>
    <div class="form">
      <div class="inputs">
        <InputWithError
          label="Titre"
          :value="titleValue"
          @input="getMovieDataFromInput($event, 'title')"
        />
        <!--j'ecoute 'input-value' du composant-fils InputWithError / je me sers de la fonction getMovieData pour récupérer la data grâce à l'$event que je mets dans 'title'-->

        <InputWithError
          label="Année"
          :value="yearValue"
          @input="getMovieDataFromInput($event, 'year')"
        />
        <button @click="$emit('form-submitted', newMovie)" type="submit">
          Valider
        </button>
      </div>
      <div class="image-container">
        <InputWithError
        
          label="Image"
          :value="imageValue"
          @input="getMovieDataFromInput($event, 'image')"
          
        />
    <div v-if="imageValue.length !=0">
        <img  class=image :src="imageValue" alt="image du film" />
    </div>
      </div>
    </div>
    
    <!--j'écoute le @click du bouton, je me sers de $emit pour envoyer chaque data contenues dans 'event'-->
  </div>
</template>

<script>
import InputWithError from "./InputWithError";

export default {
  name: "Form",
  components: { InputWithError },
  data() {
    return {
      newMovie: {
        title: "",
        year: "",
        image: "",
      },
    };
  },
  props: {
    titleValue: {
      type: String,
      default: "",
    },
    yearValue: {
      type: String,
      default: "",
    },
    imageValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    getMovieDataFromInput(event, data) {
      this.newMovie[data] = event;
    },
  },
  mounted() {
    this.newMovie.title = this.titleValue;
    this.newMovie.year = this.yearValue;
    this.newMovie.image = this.imageValue;
  },
};
</script>

<style scoped>
.form {
  height: 400px;
  display: flex;
  margin: 20px;
  
  justify-content: space-around;
  
}

.inputs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
}

button{
  width: 150px;
  align-self: center;
  margin-bottom: 50px;
  background:#2c3159;
  color: #eee;
  border: none;
  border-radius: 20px;
  padding: 8px 0;
  transition-duration: 0.4s;
}

button:hover{
  background:#adadb1;
  color:#2c3159;
  border: solid 0.5px #2c3159;
}

.image-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  
}
.image {
  margin-left:50px;
  margin-top: 20px;
  max-width: 400px;
  max-height: 300px;
  border: 10px solid #2c3159;
  border-radius: 10px;
  margin-bottom: 50px;
}
</style>