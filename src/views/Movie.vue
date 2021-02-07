<template>
  <Layout title="Modifier le film">
   <template #content >
     <div class="container">
  
      <h2> {{getMovieById($route.params.id).name}}</h2>

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
  </Layout>
</template>

<script>
import Form from "../components/Form.vue";
import { mapActions, mapGetters } from "vuex";
import Layout from "../components/Layout.vue";

export default {
  name: "Movie",

  data() {
    return {
      errors: [],
    };
  },

  components: { Layout, Form },

  computed: {
    ...mapGetters(["getMovies", "getMovieById"]),
  },

  methods: {
    checkForm: async function (data) {
      if (data.title && data.year) {
        await this.sendToAPI(data); // methode pour modifier devrait être put mais ne fonctionne pas avec cette API, du coup on crée un nouveau film
        alert("Film modifié !");
        this.$router.push("/");
      }
      this.errors = [];
      if (!data.title) {
        this.errors.push("Veuillez renseigner un titre");
      }
      if (!data.year) {
        this.errors.push("Veuillez renseigner une année");
      }
      if (!data.image) {
        this.errors.push("Veuillez renseigner une url");
      }
    },
    ...mapActions(["sendToAPI"]),
  },
};
</script>

<style>
.container {
  background: #bbb;
  display: flex;
  flex-direction: column;
  border: solid 3px hsla(0, 0%, 100%, 0.7);;
  border-radius: 20px;
}
h2 {
  margin-top: 15px;
  text-align: center;
}


</style>