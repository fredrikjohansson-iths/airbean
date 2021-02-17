<template>
  <div>
    
    <br />
    <br />
    <button @click="addToCart">ADD</button> |
    <span class="product-name">{{ product.name }}</span> |
    <span class="product-price">{{ product.price }} kr</span>
    <p class="product-info">{{ product.info }}</p>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    addToCart() {
      const prodItem = this.product;
      store.dispatch("addProductToCart", prodItem);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>