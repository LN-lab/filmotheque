<template>
  <div class="layout">
    <Header>
      <template #title>{{title}}</template>
    </Header>
    <div class="content">
      <slot name="content"></slot>
    </div>
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

.layout {
    width: 100%;
    margin: 0 auto;
    background: linear-gradient(160deg,#2c3159,#d4d6e1);

}
.content{
    width:1200px;
    height: 100vh;
    margin: auto;
    overflow: auto;
    padding-bottom: 50px;
}
</style>