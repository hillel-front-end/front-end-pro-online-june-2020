import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        usersList: [
            {
                name: 'Name 1',
                mark: '8'
            },
            {
                name: 'Name 2',
                mark: '2'
            },
            {
                name: 'Name 1',
                mark: '10'
            }
        ]
    },
    getters: {
        getMarks(state) {
            return state.usersList.map(user => Number(user.mark));
        },
        getAverage(state, store) {
            const sum = store.getMarks.reduce((prev, item) => {return Number(prev) + Number(item)});

            return sum/state.usersList.length;
        }
    },
    mutations: {
        removeUser(state, index) {
            state.usersList.splice(index, 1);
        },
        addEmptyUser(state) {
            state.usersList.push({
                name: 'DefaultName',
                mark: '1'
            })
        }
    }
});

export default store;