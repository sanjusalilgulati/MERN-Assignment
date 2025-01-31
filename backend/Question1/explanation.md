# Question 1: Longest Increasing Subsequence

## Problem Statement
Given an array of integers, return the length of the longest increasing subsequence.

## Approach: Binary Search + DP (O(n log n))
- **Used a `sub` array** to store the increasing sequence.
- **Binary search** is used to find the correct position for each element.
- **Efficient approach** compared to `O(n²)` DP solution.

## Complexity Analysis
- **Time Complexity**: `O(n log n)`
- **Space Complexity**: `O(n)`

## Example:
### Input:
```js
[10, 9, 2, 5, 3, 7, 101, 18]


### JavaScript Solutions (Node.js)
```bash
node solution.js
