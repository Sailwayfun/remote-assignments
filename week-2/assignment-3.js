function calculate(data) {
    const times = 1 - data.discount;
    const priceArr = data.products.map(product => product.price * times);
    const discountedAmount = priceArr.reduce((a, b) => a + b);
    return discountedAmount;
}

const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {name: "Product 1", price: 100},
        {name: "Product 2", price: 700},
        {name: "Product 3", price: 250}
    ]

});

console.log(discountedPrice);