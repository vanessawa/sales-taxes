<template>
  <header>
    <h1>Welcome to our shop</h1>
  </header>
  <main>
    <h2>Products</h2>
    <div id="prodDiv" v-for="Product in Products" :key="Product.id">
      {{ Product.title }}
      <span class="endSpan" v-text="grossPrice(Product)" />
      <button id="basket-btn" @click="onClick(Product)">add to basket</button>
    </div>
    <br />
    <h2 v-if="Basket.length >= 1">Basket</h2>
    <div v-for="Basketitem in Basket" :key="Basketitem.id">
      <div id="basketDiv">
        <span>{{ Basketitem.title }}</span>
        <span class="endSpan">Net: {{ Basketitem.price }}</span>
        <span class="endSpan">Tax: {{ Basketitem.taxPrice }}</span>
        <span class="endSpan">Gross price: {{ Basketitem.grossPrice }}</span>
      </div>
    </div>
  </main>
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
    taxPrice(Product) {
      let taxes = (Product.price * Product.tax) / 100;

      if (Product.imported === true) {
        taxes = ((Product.tax + 5) * Product.price) / 100;
      }

      let factor = 0.05;
      let rounded = Math.ceil(taxes / factor) * factor;
      let taxPrice = rounded.toFixed(2);

      return taxPrice;
    },

    grossPrice(Product) {
      let grossPrice = Product.price + parseFloat(this.taxPrice(Product));

      return grossPrice.toFixed(2);
    },

    onClick(Product) {
      Product.taxPrice = this.taxPrice(Product);
      Product.grossPrice = this.grossPrice(Product);
      this.Basket.push(Product);
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
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
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

#basket-btn {
  border: 0;
  background: rgba(145, 144, 144, 0.139);
  color: inherit;
}

#basket-btn:hover {
  background-color: rgba(74, 74, 74, 0.139);
}

#prodDiv {
  max-width: 700px;
  display: grid;
  grid-template-columns: 200px 100px 100px;
  margin-bottom: 3px;
  grid-column-gap: 15px;
  justify-content: space-between;
}

.endSpan {
  justify-self: end;
}

#basketDiv {
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 1fr;
  margin-bottom: 3px;
  column-gap: 1rem;
}

@media (max-width: 510px) {
  #prodDiv {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  #basketDiv {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
}
</style>
