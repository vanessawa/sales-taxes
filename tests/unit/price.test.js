import products from "../../src/components/Products.js";

function taxCalc(product) {
  let taxes = (product.price * product.tax) / 100;
  if (product.imported) {
    taxes = ((product.tax + 5) * product.price) / 100;
  }

  let factor = 0.05;
  let rounded = Math.ceil(taxes / factor) * factor;
  let taxPrice = rounded;
  return taxPrice;
}

function grossPrice(product) {
  return product.price + parseFloat(taxCalc(product));
}

test("checks if calculated tax is valid", () => {
  products.forEach((product) => {
    let taxPrice = taxCalc(product);
    expect(taxPrice).not.toBeNull();
    expect(taxPrice).toBeDefined();
    expect(taxPrice).not.toBeLessThan(0);
  });
});

test("checks if grossprices are valid", () => {
  products.forEach((product) => {
    let price = grossPrice(product);
    expect(price).not.toBeNull();
    expect(price).toBeDefined();
    expect(price).not.toBeLessThan(0);
    expect(price).toBeGreaterThan(0);
  });
});
