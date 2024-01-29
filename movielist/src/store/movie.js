import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    title: "",
    loading: false,
    movies: [],
  }),
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => (state[key] = payload[key]));
    },
  },
  actions: {
    async searchMovies({ state, commit }) {
      commit("updateState", {
        loading: true,
      });
      const res = await axios.get(
        `http://www.omdbapi.com/?s=${state.title}&apikey=1709ec8c`
      );
      commit("updateState", {
        movies: res.data.Search,
        loading: false,
      });
    },
  },
};
