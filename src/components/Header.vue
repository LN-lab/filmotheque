<template>
  <header>
    <slot name="title"></slot>
  </header>
  
</template>

<script>

export default {
  name: 'Header',

}
</script>

<style>
header {

  color: #eee;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  padding: 2rem;
  padding-bottom: 1rem;
  width: 100%;
}
</style>