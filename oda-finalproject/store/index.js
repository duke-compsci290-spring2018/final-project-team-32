import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      role: 'guest'
    },
    // mutations: {
    //   increment (state) {
    //     state.counter++
    //   }
    // }
  })
}

export default createStore