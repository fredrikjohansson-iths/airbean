<template>
  <div>
    <section class="header"></section>
    <section class="profile">
      <div class="profile-picture">
        <img src="" alt="" />
      </div>
      <div class="profile-info">
        <h3>Sixten Kaffelövér</h3>
        <p>emailadress</p>
      </div>
    </section>
    <section class="order-history">
      <div class="order-item"></div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.state.user;
    },
    orderList() {
      return this.$store.state.orders
    }
  },
};
</script>

<style lang="css" scoped>
</style>