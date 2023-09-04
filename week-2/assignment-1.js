function max(numbers) {
    let largest = numbers[0];//先都假設第一位最大
    numbers.forEach(num => {
        if (num > largest) {
            largest = num;
        }
    });//用forEach讓每個數都跟首位比較，如果較大則取而代之變成largest的值
    return largest;
}

// max([1, 2, 5, 7]);//7