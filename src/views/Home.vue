<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h2>{{ getUser.name }}</h2>
    <h2>{{ getUser.email }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  computed: {
    getUser() {
      return this.$store.state.user;
    },
  },
  components: {
    HelloWorld,
  },
};
</script>
