<template>
  <router-link to="/"><button>&#8592 Retour</button></router-link>
</template>

<script>
export default {
  name: "HomeButton"

}
</script>

<style scoped>
button {
	cursor: pointer;
	position: relative;
	padding: 0.4rem 2.5rem;
	border-radius: 3.75rem;
	line-height: 2.5rem;
	font-size: 1.2rem;
	font-weight: 500;
  color: #eee;
  margin-top: 2rem;
	
	border: 1px solid #2c3159;
	background-image: linear-gradient(-180deg, #191937 0%, #2c3159 100%);
	box-shadow:
							0 -0.2rem 0.7rem#3d4054 inset,
							0 0.6rem 0.3rem rgba(255,255,255, 0.4) inset,
							0 0.25rem 0.5rem 0 rgb(70, 81, 207) inset;
}


</style>