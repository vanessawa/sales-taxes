const products = [
  {
    id: 1,
    title: "book",
    price: 12.49,
    tax: 0,
    imported: false,
  },
  {
    id: 2,
    title: "music CD",
    price: 14.99,
    tax: 10,
    imported: false,
  },
  {
    id: 3,
    title: "chocolate bar",
    price: 0.85,
    tax: 0,
    imported: false,
  },
  {
    id: 4,
    title: "imported box of chocolates",
    price: 10.0,
    tax: 0,
    imported: true,
  },
  {
    id: 5,
    title: "imported bottle of perfume",
    price: 47.5,
    tax: 10,
    imported: true,
  },
  {
    id: 6,
    title: "imported bottle of perfume",
    price: 27.99,
    tax: 10,
    imported: true,
  },
  {
    id: 7,
    title: "bottle of perfume",
    price: 18.99,
    tax: 10,
    imported: false,
  },
  {
    id: 8,
    title: "packet of headache pills",
    price: 9.75,
    tax: 0,
    imported: false,
  },
  {
    id: 9,
    title: "box of imported chocolates",
    price: 11.25,
    tax: 0,
    imported: true,
  },
];

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
test("checks if calculated tax is not invalid", () => {
  products.forEach((product) => {
    let taxPrice = taxCalc(product);
    expect(taxPrice).not.toBeNull();
    expect(taxPrice).toBeDefined();
    expect(taxPrice).not.toBeLessThan(0);
  });
});
