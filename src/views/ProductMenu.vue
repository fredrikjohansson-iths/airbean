<template>
  <div>
    <section class="header"></section>
    <section class="menu">
      <h1>Meny</h1>
      <article
        class="product-item"
        v-for="(product, index) in products"
        :key="index"
      >
        <button>ADD</button> |
        <span class="product-name">{{ product.name }}</span> |
        <span class="product-price">{{ product.price }} kr</span>
        <p class="product-info">{{ product.info }}</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.menuItems;
    },
  },
};
</script>

<style lang="css" scoped>
.product-item {
  margin-bottom: 20px;
  border-bottom: 1px black solid;
}
</style>