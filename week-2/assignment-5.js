function twoSum(nums, target) {
    let a = 0;
    let b = nums.findIndex(num => nums[a] + num === target);
    while (b === -1) {
        a++;
        b = nums.findIndex(num => nums[a] + num === target);
        if (b !== -1) {
            break;
        }
    }
    if (a > b) {
        return [b, a];
    } else {
        return [a, b];
    }


}

console.log(twoSum([2, 7, 11, 15], 9));