const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";


////error handling helper
function printErrorMessage(err) {
    console.log(err.message);
}

async function ajax(url) {
    try {
        const res = await fetch(url);
        if (res.status !== 200) {
            throw Error("Failed to connect to the API")
        }///check response status before parsing response
        console.log("Successfully connected to the API");
        const data = await res.json();
        if (!data) {
            throw Error("Invalid data. Failed to parse to JSON")
        }
        console.log("Successfully get the data");
        await render(data);
    } catch (err) {
        printErrorMessage(err);
    }

}


async function render(data) {
    try {
        const html = data.map(product => {
            if (product.name.trim().length === 0 ||
                product.price, toString().trim().length === 0 ||
                product.description.trim().length === 0
            ) {
                throw new Error(`Incomplete data about product: 
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
    } catch (err) {
        printErrorMessage(err);
    }

}

////call ajax
ajax(url);