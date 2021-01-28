import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  //state est un objet dans lequel on stoque les infos le temps de la session sur le site
  //par ex:
  state: {
    movies: [],
    users: [],
    errors: {
      addError: "",
      editError: ""
    },
    //pop-ups interne
    modals: {
      isAddModalOpened: false,
    }
  },
  //les getters servent à aller chercher les infos du state. Dès que l'info est modifiée, ils se recalculent (comme les computed)
  //par ex
  getters: {
    //je récupère mon tableau de films
    getMovies(state) {
      return state.movies;
    },
    getSortedMovies: (state) => {
      return state.movies.sort();// return les films ordonnés a coder
    },
    getFilteredMovies: (state) => (string) => {
      return state.movies.filter((movie) => movie.name.match(string));
    },
    getMovieById: (state, id) => {
      return state + id; // return le bon film à coder
    },
  },
  // actions asynchrone souvent appel à l'api + application d'une mutation avec context.commit
  actions: {
    //récupération des films sur l'API
    async fetchMovies(context) {
      const response = await axios.get(
        "https://movies-api.alexgalinier.now.sh/"
      );
      const movies = response.data;
      context.commit("fillMovies", movies);
    },
  },
    // les mutations modifient le state avec des fonctions
    //(toujours mettre le state en arg)
    //elles toujours synchrones
    mutations: {
      //remplir mon tableau movies créé dans state
      fillMovies(state, movies) {
        state.movies = movies;
      },
      //permuter en true ou false en commencant par false
      toggleModal(state) {
        state.modals.isAddModalOpened = !state.modals.isAddModalOpened;
      },
    },
  //permet de diviser les stores plusieurs parties
    modules: {}
  });
