<template>
  <div v-if="basket.length >= 1" class="basketDiv">
    <b>Product</b>
    <b class="endSpan">Net</b>
    <b class="endSpan">Tax</b>
    <b class="endSpan">Gross price</b>
  </div>
  <div v-for="basketitem in basket" :key="basketitem.id">
    <div class="basketDiv">
      <span>{{ basketitem.title }}</span>
      <span class="endSpan">{{ basketitem.price.toFixed(2) }}</span>
      <span class="endSpan">{{ basketitem.taxPrice }}</span>
      <span class="endSpan">{{ basketitem.grossPrice }}</span>
    </div>
  </div>
  <div v-for="basketitem in basket" :key="basketitem.id"></div>
  <div class="basketDiv" v-if="basket.length >= 1">
    <b>Sum</b>
    <b class="endSpan" v-text="netSum(basket)" />
    <b class="endSpan" v-text="taxSum(basket)" />
    <b class="endSpan" v-text="grossSum(basket)" />
  </div>
</template>

<script>
export default {
  props: ["basket"],
  methods: {
    taxSum(basket) {
      let taxSum = 0;
      basket.forEach(
        (basketitem) => (taxSum += parseFloat(basketitem.taxPrice))
      );
      return taxSum.toFixed(2);
    },
    netSum(basket) {
      let netSum = 0;
      basket.forEach((basketitem) => (netSum += parseFloat(basketitem.price)));
      return netSum.toFixed(2);
    },
    grossSum(basket) {
      let grossSum = 0;
      basket.forEach(
        (basketitem) => (grossSum += parseFloat(basketitem.grossPrice))
      );
      return grossSum.toFixed(2);
    },
  },
};
</script>
