<template>
  <h1>Welcome to our shop</h1>
  <h2>Products</h2>
  <div v-for="Product in Products" :key="Product.id">
    {{ Product.title }}
    <span v-text="grossPrice(Product)" />
    <button id="basket-btn" @click="onClick(Product)">add to basket</button>
  </div>
  <br />
  <h2>Basket</h2>
  <div v-for="Basketitem in Basket" :key="Basketitem.id">
    {{ Basketitem.title }} {{ Basketitem.grossPrice }}
  </div>
</template>

<script>
import Products from "./components/Products.js";

export default {
  name: "App",
  data() {
    return {
      Products,
      Basket: [],
    };
  },
  components: {},
  methods: {
    grossPrice(Product) {
      let grossPrice = Math.round(
        Product.price + (Product.price * Product.tax) / 100
      );
      return grossPrice;
    },

    onClick(Product) {
      Product.grossPrice = this.grossPrice(Product);
      this.Basket.push(Product);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 3rem;
  margin-left: 2rem;
}

#basket-btn {
  margin-left: 0.5rem;
}
</style>
