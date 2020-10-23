<template>
  <div class="home">
      <h2>
          Home
      </h2>
      <ul>
        <li 
            v-for="(userId, index) in userList" 
            :key="index"
            @click="onSelectUser(userId)"
        >
            {{userId}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            userList: ['id-4', 'id-5']
        }
    },
    methods: {
        onSelectUser(userId) {
            // this.$router.push(['/', 'my-career', userId]);
            this.$router.push(`/my-career/${userId}`);
        }
    }
}
</script>

<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    li {
        cursor: pointer;
    }
</style>