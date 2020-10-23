<template>
  <div id="dashboard">
    Marks: {{ marks.join(',') }}
    <table border="1">
      <tr>
        <td>Average</td>
        <td>{{ average }}</td>
      </tr>
      <tr>
        <td>Max</td>
        <td>{{ Math.max(...marks) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  computed: {
    marks() {
      return this.$store.getters.getMarks;
    },
    average() {
      return this.$store.getters.getAverage;
    }
  }
}
</script>

<style scoped>
#dashboard {

}
</style>