/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[num] = i;
    }
    return [];
};