<template>
  <div>
    <section class="header"></section>
    <section class="menu">
      <article v-for="(item, index) in cartItems" :key="index">
        {{ item.name }}
      </article>
      <h1>Meny</h1>
      <ProductMenuItem
        class="product-item"
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      >
      </ProductMenuItem>
    </section>
  </div>
</template>

<script>
import ProductMenuItem from "@/components/ProductMenuItem.vue";
export default {
  components: {
    ProductMenuItem,
  },
  computed: {
    products() {
      return this.$store.state.menuItems;
    },
    cartItems() {
      return this.$store.state.cartItems;
    },
  },
};
</script>

<style lang="css" scoped>
.product-item {
  margin-bottom: 20px;
  border-bottom: 1px black solid;
}
.menu {
  width: 500px;
  margin-right: auto;
  margin-left: auto;
}
</style>