<template>
 <Layout title="Ajout d'un film">
      <template #content>
        <p v-if="errors.length">
          <ul>
            <li v-for="error in errors" :key="error">{{error}}</li>
        </ul>
        </p>
          <Form 
          @form-submitted="checkForm">     
          
          </Form>
      </template>
 </Layout>
</template>

<script>
import Layout from '../components/Layout'
import Form from '../components/Form'
import axios from 'axios'

export default {
  name:'AddMovie',
  components: { Layout, Form },
  data () {
    return{
      errors : []
    }
  },
  methods: {
      checkForm : function(data){
        if (data.title && data.year) {
         this.sendToAPI(data);
        }
        this.errors = [];
        if (!data.title) {
          this.errors.push('Veuillez renseigner un titre');
        }
        if (!data.year) {
          this.errors.push('Veuillez renseigner une année');
        }
       
      },
    async sendToAPI (data) {
      const movie = {
        name: data.title, 
        year: parseInt(data.year), 
        url: data.image 
        };
      await axios.post('https://movies-api.alexgalinier.now.sh/', movie);
      alert('Film ajouté !');
      this.$router.push("/")
      return
    }
  }
}
</script>

<style>

</style>