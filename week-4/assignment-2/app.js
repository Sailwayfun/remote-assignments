const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";


////error handling helper
function printErrorMessage(err) {
    console.log(err.message);
}

function ajax(url) {
    return fetch(url)
        .then(res => {
            if (res.status !== 200) {
                throw Error("Failed to connect to the API")
            }///check response status before parsing response
            console.log("Successfully connected to the API");
            return res.json();
        })
        .catch(err => { printErrorMessage(err) });
}


function render(data) {
    if (!data) {
        console.log("No data is available");
    }
    console.log("Successfully got the data");
    const html = data.map(product => {
        if (product.name.trim().length === 0 ||
            product.price, toString().trim().length === 0 ||
            product.description.trim().length === 0
        ) {
            console.log(`Incomplete data about product: 
                ${product.name ? product.name : "Unknown"}`)
        }
        return (
            `<div class="item">
                    <h2 class="name">${product.name}</h2>
                    <b class="price">$ ${product.price}</b>
                    <p class="description">${product.description}</p>
                </div>`);
    });
    document.querySelector(".container").innerHTML = html;
}

////call ajax
ajax(url).then(data => {
    render(data);
});