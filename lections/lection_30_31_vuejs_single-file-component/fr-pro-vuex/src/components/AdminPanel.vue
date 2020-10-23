<template>
  <div id="admin_panel">
    <table border="1">
      <tr v-for="(user, index) in users" :key="index">
        <td>#{{index}}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.mark }}</td>
        <td><button @click="onRemove(index)">Remove</button></td>
      </tr>
    </table>
    <button @click="onAdd()">Add</button>
  </div>
</template>

<script>
export default {

  name: "AdminPanel",
  computed: {
    users() {
      return this.$store.state.usersList;
    }
  },
  methods: {
    onRemove(index) {
      this.$store.commit('removeUser', index);
    },
    onAdd() {
      this.$store.commit('addEmptyUser');
    }
  }
}
</script>

<style scoped>

</style>