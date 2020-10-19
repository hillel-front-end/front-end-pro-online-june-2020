<template>
  <div>
      <h2>
          Career
      </h2>
      <table>
          <tr>
              <td>Params</td>
              <td>{{ $route.params }}</td>
          </tr>
            <tr>
              <td>Query</td>
              <td>{{ $route.query }}</td>
          </tr>
      </table>
      Current User info: {{ currentUserInfo }}
      <button @click="goHome">Back</button>
  </div>
</template>

<script>
export default {
    name: 'Career',
    data() {
        return {
            currentUserInfo: null
        }
    },
    methods: {
        goHome() {
            this.$router.push('/');
        }
    },
    created() {
        console.log(this.$route.params);
        fetch(`http://localhost:7070/users/${this.$route.params.userId}`)
            .then(resp => resp.json())
            .then(data => {
                this.currentUserInfo = data;
            })
    }
}
</script>

<style>

</style>