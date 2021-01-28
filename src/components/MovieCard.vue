<template>
  <div>
    <div class="movieContainer">
      <div class="movieImage">
        <slot name="Image"></slot>
      </div>
      <div class="movieInfo">
        <div class="movieTitle">
          <slot name="Title"></slot>
        </div>
        <div class="movieDate">
          <slot name="Date"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
};
</script>

<style>
.movieContainer {
  width: 380px;
  border-radius: 20px;
  padding: 10px;
  background: #353d6d;
  box-shadow: 0 7px 00 rgba(0, 0, 0, 0.2);
}
.movieImage {
  border-radius: 15px;
  height: 300px;
  width: 100%;
  background-position: 50%;
  background-size: cover;
}
.movieInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  color: #fff;
}
</style>