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
    getSortedMovies: (state) => (a, b) => {
      return state.movies.sort((a, b) => {
        const fa = a.name.toLowerCase()
        const fb = b.name.toLowerCase()
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
    },

    getFilteredMovies: (state) => (inputString) => {
      return state.movies.filter((movie) => movie.name.toLowerCase().match(inputString.toLowerCase()));
    },
    getMovieById: (state) => (id) => {
      return state.movies.find((movie) => movie.id === id);
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
    //envoi des films sur l'API
    sendToAPI (context, data) {
      const movie = {
        name: data.title,
        year: parseInt(data.year),
        url: data.image
        };
      axios.post('https://movies-api.alexgalinier.now.sh/', movie);  

    }
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
