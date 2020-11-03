import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);


// Store ->
// 1. State - состояние приложения
// 2. Mutations -> this.setState({name: 'Katya'});

const store = new Vuex.Store({
    state: {
       name: 'Vasya',
       age: 23,
       friends: ['Name 1', 'Name 2', 'Name 3'],
       weatherForecast: {
           list: []
       }
    },
    getters: {
        name(state) {
            return state.name.toUpperCase();
        }
    },
    mutations: {
        changeName(state, newName) {
            state.name = newName;   
        },
        updateNameAge(state, {name, age}) {
            state.name = name;
            state.age = age;
        },
        addFriendMutation(state, { newFriend }) {
            state.friends.push(newFriend);
        },
        updateWeather(state, data) {
            state.weatherForecast = data;
        }
    },
    actions: {
        addFriend({ commit, state }, { newFriend }) {
            if (!Array.isArray(state.friends) || !newFriend) {
                return;
            }

            commit('addFriendMutation', {
                newFriend
            });
            // commit('changeName', 'bla bla');
        },
        initWeatherForecast({ commit }) {
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&appid=APPID&units=metric')
                .then(resp => resp.json())
                .then(weather => {
                    commit('updateWeather', weather);
                })
        }
    }
});

export default store;