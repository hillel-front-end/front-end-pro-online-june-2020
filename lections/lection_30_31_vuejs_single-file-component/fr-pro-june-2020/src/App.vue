<template>
  <div id="app">
      <!-- {{ value }}
      <hr>
       Name: {{ name }} -->
       <!-- <input type="text" v-model="name"> -->
       <!-- <input type="text" :value="name" @input="name=$event.target.value">
       <hr> -->
<!--
       <ButtonCustom :val="value" @change-value="onChange" v-model="name" />
       <hr> -->
    <router-link to="/">Go to Home</router-link>
    <br>
    <router-link to="/my-career/178299432">Go to Career 178299432</router-link>
    <hr>
    <router-link to="/slots">Slots</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import ButtonCustom from './components/ButtonCustom.vue'

const AppComponent = {
  name: 'App',
  components: {
    ButtonCustom
  },
  data () {
    return {
      value: 98,
      name: 'Example name'
    }
  },
  methods: {
    onIncreaseValue () {
      this.value *= 10;

    },
    onChange(newVal) {
      this.value = newVal;
    }
  }
}

export default AppComponent

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
