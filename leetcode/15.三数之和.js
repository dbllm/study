/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var _qsort = arr => arr.length > 1 ? [..._qsort(arr.filter(a => a < arr[0])), ...arr.filter(a => a === arr[0]), ..._qsort(arr.filter(a => a > arr[0]))] : arr;
    nums = _qsort(nums);
    let len = nums.length;
    let res = []
    if (nums[0] > 0 || nums[len - 1] < 0) {
        return res
    }
    let i = 0;
    while (i < len - 2) {
        let first = i + 1;
        let last = len - 1;
        if (nums[i] > 0) break;
        
        while(first < last) {
            if (first >= last || nums[i] * nums[last] > 0) break;
            let sum = nums[i] + nums[first] + nums[last];
            if (sum === 0) {
                res.push([nums[i], nums[first], nums[last]]);
            }
            if (sum > 0) {
                while(first < last && nums[last] === nums[--last]);
            } else {
                while(first < last && nums[first] === nums[++first]);
            }
        }
        while(nums[i] === nums[++i]);
    }
    return res;
}

