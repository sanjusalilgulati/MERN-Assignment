
/** 
 * Example: DSA Problem Solution (Question1/solution.js)** javascript
 * Finds the length of the longest increasing subsequence.
 * @param {number[]} nums - The input array
 * @returns {number} - Length of LIS
 */

function lengthOfLIS(nums) {
    let sub = [];

    for (let num of nums) {
        let left = 0, right = sub.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (sub[mid] < num) left = mid + 1;
            else right = mid - 1;
        }
        if (left < sub.length) sub[left] = num;
        else sub.push(num);
    }

    return sub.length;
}

// Example usage
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(arr)); // Output: 4
