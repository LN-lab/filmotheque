<template>
  <div class="movieInfo">
    <div class="title">
      <slot name="Title"></slot>
    </div>
    <div class="date">
      <slot name="Date"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
};
</script>

<style scoped>
.movieInfo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 5px;
    
}
.title{
    font-family: Alfa Slab One,cursive;
    font-size: 22px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
}
.date{
    font-size: 20px;
    line-height: 22px;
    color: hsla(0,0%,100%,.4);
    margin-left: 10px;
}
a{
  text-decoration: none;
}
</style>
