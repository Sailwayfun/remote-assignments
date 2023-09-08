function calculate(data) {
    const times = 1 - data.discount;
    // const priceArr = data.products.map(product => product.price * times);
    // const discountedAmount = priceArr.reduce((a, b) => a + b);
    const getTotalPrice = (accumulator, prod) => {
        return (accumulator + prod.price * times);
    }
    const discountedAmount = data.products.reduce(getTotalPrice, 0);
    ///reduce method中指明accumulator的初始值是0，每次都加上products[i]的price值，
    ///就能確保每次累加都能取得product的價格
    return discountedAmount;
}

const discountedPrice = calculate({
    discount: 0.1,
    products: [
        { name: "Product 1", price: 100 },
        { name: "Product 2", price: 700 },
        { name: "Product 3", price: 250 }
    ]

});

console.log(discountedPrice);