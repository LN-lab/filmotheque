<template>
  <div>
    <Header>
      <template #title>{{title}}</template>
    </Header>
    <div><slot name="content"></slot></div>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name:'Layout',
  components: { Header },
  props: {
    title: {
      type: String,
      default: "Titre par défaut"
    }
  }
  
}
</script>

<style>

</style>