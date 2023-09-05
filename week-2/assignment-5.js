function twoSum(nums, target) {
    let a = 0;
    let b = nums.findIndex(num => num[a] + num === target);
    while (b === -1) {
        a++;
        b++;
        if (nums[a] + nums[b] === target) {
            break
        }
    }
    if (a > b) {
        return [b, a];
    } else {
        return [a, b];
    }
    

}

console.log(twoSum([2, 7, 11, 15], 9));