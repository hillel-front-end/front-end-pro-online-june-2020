<template>
  <div id="app">
    <Dashboard v-if="false"></Dashboard>
    <hr>
    <AdminPanel v-if="false"></AdminPanel>
    <hr>
    {{ name }} - {{ age }}
    <br>
    {{ friends }}
    <br>
    big name: {{ nameUpperCase }}
    <br>
    <button @click="$store.commit('changeName', someName)">Update Name</button>
    <button @click="onUpdateName">Update Name</button>
    <input type="text" v-model="someName">
    <hr>
    <table border="1">
      <tr>
        <th v-for="(val, key) in weatherForecast.list[0]" :key="key">{{ key }}</th>
      </tr>
      <tr v-for="item in weatherForecast.list" :key="item.dt">
        <td v-for="(val, key) in item" :key="key">{{ val }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";

export default {
  name: 'App',
  components: {
    Dashboard,
    AdminPanel
  },
  data() {
    return {
      someName: ''
    }
  },
  computed: {
    ...mapState(['name', 'age', 'friends', 'weatherForecast']),
    ...mapGetters({
      nameUpperCase: 'name'
    }),
    // name() {
    //   return this.$store.state.name;
    // },
    // age() {
    //   return this.$store.state.age;
    // }
  },
  methods: {
    ...mapMutations(['changeName', 'updateNameAge']),
    ...mapActions({
      addFriendAction: 'addFriend',
      initWeatherAction: 'initWeatherForecast'
    }),
    onUpdateName() {
      // this.$store.commit('changeName', this.someName)
      this.changeName(this.someName);
    }
  },
  created() {
   



    setTimeout(() => {
      // this.$store.commit('updateNameAge', {
      //   name: 'UpdatedName',
      //   age: 56,
      // });
      // this.$store.commit({
      //   type: 'updateNameAge',
      //   name: 'UpdatedName',
      //   age: 56,
      // });
      // this.updateNameAge({
      //   name: 'UpdatedName',
      //   age: 56,
      // });

      // this.$store.dispatch('addFriend', 'Name 4');
      // this.$store.dispatch({
      //   type: 'addFriend',
      //   newFriend: 'Name 4'
      // });
      this.addFriendAction({
        newFriend: 'Name 4'
      });

      this.initWeatherAction();
       
    }, 2000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
</style>
