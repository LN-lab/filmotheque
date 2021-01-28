<template>
  <header>
    <slot name="title"></slot>
    <button><router-link to="nouveau-film">Ajouter un film</router-link></button>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
header {
  margin: 10px;
}
h1{
  color:blue;
}
a {
  text-decoration: none;
  color: #333;
}
</style>