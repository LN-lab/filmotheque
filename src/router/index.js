import Vue from "vue";
import VueRouter from "vue-router";
import Movies from "../views/Movies.vue";
import NewMovie from "../views/NewMovie.vue";
import Movie from "../views/Movie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Movies",
    component: Movies,
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
  },
  {
    path: "/new-movie",
    name: "NewMovie",
    component: NewMovie,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
