<template>
  <header>
    <h1>Welcome to our shop</h1>
  </header>
  <main>
    <h2>Products</h2>
    <div
      class="prodDiv"
      v-for="product in products"
      :key="product.id"
      v-bind="product"
    >
      {{ product.title }}
      <span class="endSpan" v-text="grossPrice(product)" />

      <button class="basket-btn" @click="addToBasket(product)" :id="product.id">
        add to basket
      </button>
    </div>
    <br />
    <h2 v-if="basket.length >= 1">Basket</h2>
    <BasketCom :basket="basket" />
  </main>
</template>

<script>
import products from "./components/Products.js";
import BasketCom from "./components/BasketCom.vue";

export default {
  name: "App",
  data() {
    return {
      basket: [],
      products,
    };
  },

  components: {
    BasketCom,
  },

  methods: {
    taxPrice(product) {
      let taxes = (product.price * product.tax) / 100;

      if (product.imported === true) {
        taxes = ((product.tax + 5) * product.price) / 100;
      }

      let factor = 0.05;
      let rounded = Math.ceil(taxes / factor) * factor;
      let taxPrice = rounded.toFixed(2);

      return taxPrice;
    },

    grossPrice(product) {
      let grossPrice = product.price + parseFloat(this.taxPrice(product));

      return grossPrice.toFixed(2);
    },

    addToBasket(product) {
      product.taxPrice = this.taxPrice(product);
      product.grossPrice = this.grossPrice(product);
      this.basket.push(product);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 3rem 2rem;
}

header {
  background-image: url("https://www.itemis.com/hubfs/Corporate_Website/3MXX%20Header/h-startseite-k.jpg");
  padding: 3rem;
  background-size: cover;
}

h1 {
  color: white;
}

main {
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 2rem;
  color: #00457c;
}

.endSpan {
  justify-self: end;
}

.basket-btn {
  border: 0;
  background: rgba(145, 144, 144, 0.139);
  color: inherit;
}

.basket-btn:hover {
  background-color: rgba(74, 74, 74, 0.139);
}

.prodDiv {
  max-width: 80ch;
  display: grid;
  grid-template-columns: 25ch 15ch 15ch;
  margin-bottom: 0.2rem;
  grid-column-gap: 1rem;
  justify-content: space-between;
}

.basketDiv {
  max-width: 80ch;
  display: grid;
  grid-template-columns: 25ch 10ch 10ch 15ch;
  margin-bottom: 0.2rem;
  grid-column-gap: 1rem;
  justify-content: space-between;
}

@media (max-width: 670px) {
  .prodDiv {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .basketDiv {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
}
</style>
