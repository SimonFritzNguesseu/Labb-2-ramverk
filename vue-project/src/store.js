import { createStore } from "vuex";
const mutations = {
    incre(state) {
      console.log(state.countcount++);
    },
    decre(state) {
      console.log(state.countcount--);
    },
  },
  state = {
    countcount: 0,
  };
export default createStore({
  state,
  mutations,
  strict: true,
});
