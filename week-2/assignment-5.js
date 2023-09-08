function twoSum(nums, target) {
    let a = 0;
    let b = nums.findIndex(num => nums[a] + num === target);
    while (b === -1) {
        a++;
        b = nums.findIndex(num => nums[a] + num === target);
    }
    // if (a > b) {
    //     return [b, a];
    // } else {
    //     return [a, b];
    // }
    return [a, b];//[0, n]不成立的話，[n, 0]也不成立，故可排除a < b


}

console.log(twoSum([2, 7, 11, 15], 9));