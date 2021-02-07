<template>
 <Layout title="Ajout d'un film">
      <template #content>
        <p v-if="errors.length">
          <ul>
            <li v-for="error in errors" :key="error">{{error}}</li>
        </ul>
        </p>
          <Form @form-submitted="checkForm"></Form>
      </template>
 </Layout>
</template>

<script>
import Layout from '../components/Layout'
import Form from '../components/Form'
import { mapActions } from 'vuex'

export default {
  name:'NewMovie',
  components: { Layout, Form },
  data () {
    return{
      errors : [],
    }
  },
  methods: {
     checkForm : async function(data){
        if (data.title && data.year) {
         await this.sendToAPI(data);
         alert('Film ajouté !');
         this.$router.push("/");
        }
        this.errors = [];
        if (!data.title) {
          this.errors.push('Veuillez renseigner un titre');
        }
        if (!data.year) {
          this.errors.push('Veuillez renseigner une année');
        }
       
      },
    ...mapActions(['sendToAPI'])
    },
  
}
</script>

<style>

</style>