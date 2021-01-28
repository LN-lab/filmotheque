<template>
  <div>
    <label for="name"> {{label}} : </label>

    <input
    id="name"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)" 
    />
    
    <!--j'écoute l'input natif (comme le @click), j'emets son contenu grace à §emit / je récupère la valeur du contenu grâce à l'événement $event.target.value que je mets dans 'input'-->
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
export default {
  //nom du composant
  name: "InputWithError",
  //je crée des attributs pour mes balises html qui peuvent être transmis aux enfants
  props: {
    error: {
      type: String,
      required: false,
      default: ""
    },
    label: {
      type: String
    },
    value: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>
</style>