function delayedResult(n1, n2, delayTime, callback) {
    const result =  n1 + n2;
    setTimeout(() => {
        callback(result);
    }, delayTime);
}

// delayedResult(4, 5, 3000, function(result) {
//     console.log(result);
// })

// delayedResult(-5, 10, 2000, function(result) {
//     alert(result);
// })