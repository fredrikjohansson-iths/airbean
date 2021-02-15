<template>
  <div>
    <section class="header"></section>
    <section class="profile">
      <div class="profile-picture">
        <img src="" alt="" />
      </div>
      <div class="profile-info">
        <h3>{{ userData.name }}</h3>
        <p>{{ userData.email }}</p>
      </div>
    </section>
    <section class="order-history">
      <h3>Orderhistorik</h3>
      <div class="order-item" v-for="item in orderList" :key="item.number">
        <p>{{ item.number }}</p>
        <p>{{ item.date }}</p>
        <p>ordersumma: {{ item.sum }}</p>
      </div>
      <div class="sum">
        <p>Totalt spenderat: {{ orderSum }}</p>
      </div>
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
      return this.$store.state.orders;
    },
    orderSum() {
      const sum = this.orderList
        .map((item) => item.sum)
        .reduce((prev, next) => prev + next);
      return sum;
    },
  },
};
</script>

<style lang="css" scoped>
.order-item {
  margin-bottom: 20px;
  border-bottom: 1px black solid;
}
</style>