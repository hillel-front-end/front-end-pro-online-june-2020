<template>
  <div id="app">
    <Dashboard></Dashboard>
    <hr>
    <AdminPanel></AdminPanel>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";

export default {
  name: 'App',
  components: {
    Dashboard,
    AdminPanel
  },
  created() {
    console.log(this);
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
}
</style>
